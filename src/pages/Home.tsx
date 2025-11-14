import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBiotechLab from "@/assets/hero-biotech-lab.jpg";
import profDavidOkafor from "@/assets/team/prof-david-okafor.jpg";
import drJamesAdebayo from "@/assets/team/dr-james-adebayo.jpg";

const Home = () => {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "AI-Powered Development Intelligence",
      description: "Accelerate your pipeline with predictive analytics and real-time development insights from preclinical through launch"
    },
    {
      icon: Award,
      title: "Automated Asset Valuation",
      description: "Comprehensive asset assessment powered by machine learning and real-time regulatory intelligence"
    },
    {
      icon: CheckCircle,
      title: "Regulatory Intelligence Platform",
      description: "Navigate regulatory landscapes with AI-driven compliance tracking and automated submission workflows"
    },
    {
      icon: Globe,
      title: "Market Access Analytics",
      description: "Optimize market strategies with predictive modeling and real-time commercial intelligence across global markets"
    }
  ];

  const testimonials = [
    {
      quote: "BioVital's platform transformed our development process with AI-driven insights, reducing our regulatory timeline by 40% with automated compliance tracking.",
      author: "Prof. David Okafor",
      role: "Chief Medical Officer, NeuroPharma Solutions",
      image: profDavidOkafor
    },
    {
      quote: "The automated valuation platform was instrumental in securing $50M in Series B funding. Real-time market intelligence gave investors complete confidence.",
      author: "Dr. James Adebayo",
      role: "VP Commercial Strategy, BioCure Therapeutics",
      image: drJamesAdebayo
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-backdrop">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBiotechLab} 
            alt="Futuristic biotech laboratory with DNA helix and molecular displays"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-backdrop opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-eurostile text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-neon-cyan">BIOVITAL</span>
                  <br />
                  <span className="text-foreground">AI-Powered</span>
                  <br />
                  <span className="text-neon-purple">Life Sciences</span>
                  <br />
                  <span className="text-foreground">Intelligence Platform</span>
                </h1>
                
                <p className="font-roboto text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Transforming Biotech & Pharmaceutical Development with Real-Time AI Intelligence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glass-primary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass-secondary" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-card p-8 animate-float">
                <div className="space-y-6">
                  <div className="text-neon-cyan font-eurostile text-sm font-semibold">
                    BIOTECH INTELLIGENCE PLATFORM
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                      <span className="font-roboto text-sm text-muted-foreground">150+ Assets Optimized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-glow-pulse"></div>
                      <span className="font-roboto text-sm text-muted-foreground">$2.5B+ Value Created</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                      <span className="font-roboto text-sm text-muted-foreground">98% Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Block */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-brutal p-12 text-center">
            <h2 className="font-eurostile text-2xl md:text-3xl font-bold text-foreground mb-6">
              AI-Powered Platform for Biotech Innovation
            </h2>
            <p className="font-roboto text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              BioVital's SaaS platform leverages advanced AI and machine learning to transform biotech development. 
              Automated regulatory tracking, predictive analytics, and real-time market intelligence empower companies 
              to accelerate time-to-market. With intelligent workflows, continuous compliance monitoring, and data-driven 
              insights at every stage, BioVital delivers enterprise-grade intelligence through an intuitive cloud platform.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-eurostile text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform <span className="text-neon-cyan">Features</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              Automated intelligence across the entire development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="glass-card border border-card-border glow-hover group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                    <capability.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-eurostile text-lg font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="font-roboto text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-eurostile text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by <span className="text-neon-purple">Industry Leaders</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              Hear from the executives who've transformed their organizations with BioVital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border border-card-border p-8">
                <CardContent className="p-0 space-y-6">
                  <blockquote className="font-roboto text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={`Nigerian ${testimonial.author} ${testimonial.role}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-card-border"
                    />
                    <div>
                      <div className="font-eurostile font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="font-roboto text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="neon-outline" size="lg">
              See All Testimonials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;