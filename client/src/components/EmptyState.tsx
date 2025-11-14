import { Button } from "@/components/ui/button";
import emptyStateImage from "@assets/generated_images/Telescope_searching_illustration_3fcac84b.png";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center" data-testid="container-empty-state">
      <img 
        src={emptyStateImage} 
        alt="No results found" 
        className="w-48 h-48 mb-6 opacity-50"
      />
      <h3 className="text-2xl font-semibold mb-2" data-testid="text-empty-title">
        No opportunities found
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-empty-description">
        No opportunities match your current filters. Try adjusting your criteria to see more results.
      </p>
      <Button onClick={onClearFilters} data-testid="button-clear-filters-empty">
        Clear All Filters
      </Button>
    </div>
  );
}
