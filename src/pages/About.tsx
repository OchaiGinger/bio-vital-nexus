import { Target, Eye, Users, Lightbulb, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const missionComponents = [
    "Accelerate breakthrough therapies with AI-powered intelligence",
    "Maximize asset value through automated real-time analytics",
    "Simplify regulatory compliance with intelligent automation",
    "Enable data-driven innovation across global markets"
  ];

  const visionElements = [
    "Leading the AI transformation of life sciences development",
    "Democratizing access to enterprise-grade biotech intelligence",
    "Empowering companies to accelerate life-saving therapies",
    "Setting new standards for intelligent automation in pharma"
  ];

  const principles = [
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance and encryption"
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "Cutting-edge machine learning for predictive insights"
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Real-time data processing for actionable intelligence"
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "API-first architecture for existing workflow integration"
    },
    {
      icon: Heart,
      title: "Transparent Pricing",
      description: "Clear SaaS pricing with no hidden fees"
    },
    {
      icon: Eye,
      title: "Patient Outcomes",
      description: "Technology designed to accelerate life-saving treatments"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <section className="text-center mb-20">
          <h1 className="font-eurostile text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-neon-cyan">AI-Powered</span> Life Sciences Intelligence Platform
          </h1>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <p className="font-roboto text-lg text-muted-foreground leading-relaxed">
              Founded on the principle that every breakthrough therapy deserves intelligent automation, 
              BioVital emerged from the convergence of cutting-edge AI technology and deep biotech domain expertise. 
              We recognized that while innovation in biotechnology continues to accelerate, development teams still rely on 
              manual processes and fragmented data. Our founding team of AI engineers, data scientists, and pharma veterans 
              came together with a singular vision: to build the first comprehensive AI platform that automates regulatory 
              intelligence, asset valuation, and market analysis—delivering real-time insights that accelerate time-to-market.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="glass-card border-2 border-primary p-12">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
                Mission: Democratizing Life Sciences Intelligence
              </h2>
              <p className="font-roboto text-lg text-muted-foreground">
                Empowering every biotech company with enterprise-grade AI intelligence
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