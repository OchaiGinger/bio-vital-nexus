import { Target, Eye, Users, Lightbulb, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const missionComponents = [
    "Accelerate breakthrough therapies from bench to bedside",
    "Maximize asset value through strategic intelligence",
    "Navigate regulatory complexities with expert guidance",
    "Enable sustainable innovation in global markets"
  ];

  const visionElements = [
    "Leading the transformation of life sciences consulting",
    "Bridging the gap between innovation and market success",
    "Empowering biotech companies to save more lives",
    "Setting new standards for strategic excellence"
  ];

  const principles = [
    {
      icon: Shield,
      title: "Scientific Rigor",
      description: "Evidence-based methodologies rooted in clinical excellence"
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Pioneering new approaches to complex challenges"
    },
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Precision-focused solutions for maximum impact"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Deep integration with client teams and objectives"
    },
    {
      icon: Heart,
      title: "Ethical Practice",
      description: "Unwavering commitment to integrity and transparency"
    },
    {
      icon: Eye,
      title: "Patient Focus",
      description: "Every decision guided by improving patient outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <section className="text-center mb-20">
          <h1 className="font-eurostile text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering <span className="text-neon-cyan">Life Sciences</span> Asset Intelligence
          </h1>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <p className="font-roboto text-lg text-muted-foreground leading-relaxed">
              Founded on the principle that every breakthrough therapy deserves the optimal path to market, 
              BioVital emerged from the convergence of world-class scientific expertise and strategic consulting excellence. 
              We recognized that while innovation in biotechnology continues to accelerate, the translation of scientific 
              breakthroughs into accessible therapies remains complex and inefficient. Our founding team of industry veterans, 
              regulatory experts, and data scientists came together with a singular vision: to revolutionize how life sciences 
              assets are developed, valued, and brought to market.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="glass-card border-2 border-primary p-12">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
                Mission: Accelerating Life-Changing Therapies to Market
              </h2>
              <p className="font-roboto text-lg text-muted-foreground">
                Our core purpose drives every strategic decision and client engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missionComponents.map((component, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-roboto text-foreground">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-20">
          <div className="glass-card border-2 border-secondary p-12">
            <div className="text-center mb-12">
              <Eye className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
                Vision: Transforming Global Healthcare Through Intelligent Consulting
              </h2>
              <p className="font-roboto text-lg text-muted-foreground">
                We envision a future where every innovative therapy reaches patients faster and more effectively
              </p>
            </div>
            
            <div className="space-y-4">
              {visionElements.map((element, index) => (
                <Card key={index} className="glass-card border border-card-border glow-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="font-eurostile font-bold text-foreground">{index + 1}</span>
                      </div>
                      <span className="font-roboto text-foreground">{element}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
              Core <span className="text-neon-purple">Principles</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              The foundational values that guide our approach to every challenge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="glass-brutal border-2 border-primary glow-hover group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto group-hover:animate-float">
                    <principle.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-eurostile text-xl font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="font-roboto text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;