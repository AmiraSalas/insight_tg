import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe } from "lucide-react";

export function EcuadorSection() {
  const ecuadorOpportunities = [
    {
      id: "ec1",
      title: "Amazon Conservation Volunteer Program",
      organization: "Ecuador Wildlife Foundation",
      location: "Tena, Ecuador",
      language: "Spanish/English",
      funding: "Free",
      description: "Help protect the Amazon rainforest and work with local communities."
    },
    {
      id: "ec2",
      title: "Galápagos Marine Research Internship",
      organization: "Charles Darwin Foundation",
      location: "Galápagos Islands, Ecuador",
      language: "English",
      funding: "Fully Funded",
      description: "Conduct marine biology research in one of the world's most unique ecosystems."
    }
  ];

  return (
    <div className="w-full bg-primary/5 border-t-4 border-primary py-12" data-testid="section-ecuador">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold" data-testid="text-ecuador-title">
                Opportunities in Ecuador
              </h2>
            </div>
            <p className="text-muted-foreground mb-6" data-testid="text-ecuador-description">
              Special programs for students who need to stay in Ecuador. These opportunities are designed for local students and offer both Spanish and English language options.
            </p>
            
            <div className="space-y-4">
              {ecuadorOpportunities.map((opp) => (
                <Card key={opp.id} className="p-4 hover-elevate" data-testid={`card-ecuador-${opp.id}`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold" data-testid={`text-ecuador-title-${opp.id}`}>{opp.title}</h3>
                    <p className="text-sm text-muted-foreground">{opp.organization}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {opp.location}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {opp.funding}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">{opp.language}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{opp.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Button className="mt-6" data-testid="button-view-all-ecuador">
              View All Ecuador Opportunities
            </Button>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="rounded-lg bg-primary/10 p-12 flex items-center justify-center">
              <Globe className="w-48 h-48 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
