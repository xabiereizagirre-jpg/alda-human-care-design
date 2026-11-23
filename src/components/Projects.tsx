import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Stethoscope, Heart, Users, Phone, Building, Zap, Home, Calendar, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const projectIcons = [Stethoscope, Heart, Users, Building, Phone, Zap, Home, Calendar, Monitor];

const Projects = () => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((item, index) => ({ ...item, icon: projectIcons[index] }));

  return (
    <div className="pb-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            {t.projects.title}
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {t.projects.intro}
          </p>
        </div>

        {/* Projects carousel */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                            <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-primary leading-tight">{project.name}</CardTitle>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {project.intervention}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {project.sector}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm">{t.projects.whatWeDid}</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">{project.whatWeDid}</p>
                      </div>

                      {project.ourContribution && (
                        <div className="bg-accent/5 border-l-3 border-accent p-3 rounded-r-lg">
                          <h4 className="font-semibold text-accent mb-1 text-xs">{t.projects.ourContribution}</h4>
                          <p className="text-foreground leading-relaxed text-sm italic">{project.ourContribution}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;