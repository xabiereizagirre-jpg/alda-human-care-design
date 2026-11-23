import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake, Shield, Lightbulb, Sparkles, Zap, Network, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const valueIcons = [Heart, Handshake, Users, Shield, Lightbulb, Sparkles];
const teamIcons = [Network, Monitor, Zap];

const About = () => {
  const { t } = useLanguage();
  const values = t.about.values.map((value, index) => ({ ...value, icon: valueIcons[index] }));
  const milestones = t.about.milestones;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">
            {t.about.timelineTitle}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="text-accent font-bold text-base mb-1">{milestone.year}</div>
                        <p className="text-foreground text-sm">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-3 border-background shadow-soft"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            {t.about.valuesTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            {t.about.teamTitle}
          </h3>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.about.teamIntro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.teamRoles.map((role, index) => {
              const Icon = teamIcons[index];
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-4 text-primary text-lg">{role.title}</h4>
                    <div className="text-muted-foreground text-left space-y-3">
                      {role.points.map((point, i) => (
                        <p key={i}>→ {point}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;