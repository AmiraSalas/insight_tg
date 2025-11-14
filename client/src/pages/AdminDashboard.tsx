import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Opportunity } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut, Plus, Edit, Trash2, Lightbulb, ExternalLink } from "lucide-react";
import { OpportunityForm } from "@/components/OpportunityForm";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<Opportunity | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Check authentication
  const { data: authCheck, isLoading: authLoading } = useQuery<{ isAdmin: boolean }>({
    queryKey: ["/api/admin/check"],
  });

  // Fetch all opportunities
  const { data: opportunities = [], isLoading } = useQuery<Opportunity[]>({
    queryKey: ["/api/opportunities"],
  });

  // Fetch visitor count
  const { data: visitorData } = useQuery<{ count: number }>({
    queryKey: ["/api/visitor/count"],
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
      setLocation("/admin-login");
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest("DELETE", `/api/opportunities/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/opportunities"] });
      toast({
        title: "Opportunity deleted",
        description: "The opportunity has been removed",
      });
      setDeleteId(null);
    },
    onError: () => {
      toast({
        title: "Delete failed",
        description: "Failed to delete the opportunity",
        variant: "destructive",
      });
    },
  });

  // Redirect to login if not authenticated
  if (!authLoading && !authCheck?.isAdmin) {
    setLocation("/admin-login");
    return null;
  }

  const handleEdit = (opportunity: Opportunity) => {
    setEditingOpportunity(opportunity);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingOpportunity(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingOpportunity(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary fill-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">INSIGHT Admin</h1>
                <p className="text-sm text-muted-foreground">Manage Opportunities</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => window.open("/", "_blank")}
                data-testid="button-view-site"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Site
              </Button>
              <Button
                variant="outline"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Visitor Counter */}
        <Card className="mb-6 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-primary/10">
              <svg 
                className="w-8 h-8 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total Website Visitors</p>
              <p className="text-4xl font-bold text-primary" data-testid="text-visitor-count">
                {visitorData?.count ?? 0}
              </p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">All Opportunities</h2>
            <p className="text-muted-foreground mt-1">
              {opportunities.length} total opportunities
            </p>
          </div>
          <Button onClick={handleAdd} data-testid="button-add-opportunity">
            <Plus className="w-4 h-4 mr-2" />
            Add Opportunity
          </Button>
        </div>

        {isLoading ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Loading opportunities...</p>
          </Card>
        ) : opportunities.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No opportunities yet. Add your first one!</p>
          </Card>
        ) : (
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Funding</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opportunities.map((opp) => (
                  <TableRow key={opp.id} data-testid={`row-opportunity-${opp.id}`}>
                    <TableCell className="font-medium">{opp.title}</TableCell>
                    <TableCell>{opp.organization}</TableCell>
                    <TableCell>{opp.country}</TableCell>
                    <TableCell>{opp.deadline}</TableCell>
                    <TableCell className="capitalize">{opp.funding}</TableCell>
                    <TableCell className="capitalize">{opp.deadlineStatus}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(opp)}
                          data-testid={`button-edit-${opp.id}`}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeleteId(opp.id)}
                          data-testid={`button-delete-${opp.id}`}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </main>

      {/* Opportunity Form Dialog */}
      {showForm && (
        <OpportunityForm
          opportunity={editingOpportunity}
          onClose={handleFormClose}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Opportunity</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this opportunity? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-delete">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-testid="button-confirm-delete"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
