import { 
  FlaskConical, 
  TrendingUp, 
  Shield, 
  Globe, 
  GitBranch, 
  Handshake,
  Brain,
  Dna,
  Settings,
  BarChart3,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const platformFeatures = [
    {
      icon: FlaskConical,
      title: "Development Intelligence Module",
      description: "AI-powered insights for drug development with automated trial design optimization and real-time risk monitoring.",
      features: ["Predictive Trial Modeling", "Automated Endpoint Analysis", "AI Biomarker Discovery", "Risk Scoring Engine"]
    },
    {
      icon: TrendingUp,
      title: "Asset Valuation Engine",
      description: "Automated asset assessment with ML-driven market analysis and real-time competitive intelligence.",
      features: ["Real-Time Market Data", "Automated Comp Analysis", "AI Risk Modeling", "Dynamic NPV Calculator"]
    },
    {
      icon: Shield,
      title: "Regulatory Intelligence Hub",
      description: "Automated compliance tracking with AI-powered regulatory monitoring across global markets and therapeutic areas.",
      features: ["Auto Submission Tracking", "Compliance Dashboard", "Regulatory Alert System", "Document Automation"]
    },
    {
      icon: Globe,
      title: "Market Access Analytics",
      description: "Real-time market intelligence with predictive pricing models and automated commercialization planning.",
      features: ["Pricing Optimization AI", "Market Access Scoring", "Launch Planning Tools", "Revenue Forecasting"]
    },
    {
      icon: GitBranch,
      title: "Partnership Intelligence",
      description: "AI-driven partnership matching and automated deal structuring for technology transfer optimization.",
      features: ["Partner Matching AI", "Deal Flow Analytics", "Automated Term Sheets", "IP Valuation Tools"]
    },
    {
      icon: Handshake,
      title: "Collaboration Platform",
      description: "Unified workspace for cross-functional teams with real-time collaboration and automated workflow management.",
      features: ["Team Workspaces", "Automated Workflows", "Real-Time Sync", "API Integrations"]
    }
  ];

  const technologyStack = [
    { icon: Brain, title: "Machine Learning Core", description: "TensorFlow & PyTorch for predictive analytics" },
    { icon: Dna, title: "Biotech Data APIs", description: "Real-time integration with clinical databases" },
    { icon: Settings, title: "Automation Engine", description: "Workflow automation and smart triggers" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Interactive BI with custom visualizations" },
    { icon: Cloud, title: "AWS Infrastructure", description: "Scalable cloud with 99.99% uptime SLA" },
    { icon: Lock, title: "Enterprise Security", description: "SOC 2 Type II, HIPAA, and GDPR compliant" }
  ];

  const methodology = [
    { phase: "Onboarding", description: "Quick setup with guided data integration and workspace configuration" },
    { phase: "Data Integration", description: "Automated connection to existing systems via APIs and secure imports" },
    { phase: "AI Training", description: "Platform learns from your data to deliver customized insights" },
    { phase: "Deployment", description: "Go live with full team access and automated workflows" },
    { phase: "Optimization", description: "Continuous ML improvement with real-time performance monitoring" }
  ];

  const metrics = [
    { number: "500+", label: "Active Users", description: "Biotech companies using the platform" },
    { number: "$5B+", label: "Assets Tracked", description: "In pipeline value managed on platform" },
    { number: "60%", label: "Time Savings", description: "Average reduction in manual processes" },
    { number: "99.9%", label: "Uptime SLA", description: "Enterprise-grade reliability" }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consulting Services */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="font-eurostile text-4xl md:text-5xl font-bold text-foreground mb-6">
              Platform <span className="text-neon-cyan">Features</span>
            </h1>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered modules designed to automate and accelerate every stage of 
              biotech development and commercialization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((service, index) => (
              <Card key={index} className="glass-card border border-card-border glow-hover group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-eurostile text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-roboto text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="font-roboto text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
              Technology <span className="text-neon-purple">Stack</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              Cutting-edge tools and platforms powering our analytical capabilities
            </p>
          </div>

          <div className="glass-card p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="text-center space-y-3 p-4 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                    <tech.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="font-eurostile text-sm font-semibold text-foreground">
                    {tech.title}
                  </h4>
                  <p className="font-roboto text-xs text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-eurostile text-3xl md:text-4xl font-bold text-foreground mb-4">
              Implementation <span className="text-neon-purple">Process</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              Five-step onboarding to get your team up and running in days
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="md:w-1/2 md:px-8">
                      <Card className="glass-card border border-card-border glow-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                              <span className="font-eurostile font-bold text-foreground">{index + 1}</span>
                            </div>
                            <h3 className="font-eurostile text-xl font-bold text-foreground">
                              {phase.phase}
                            </h3>
                          </div>
                          <p className="font-roboto text-muted-foreground">
                            {phase.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    {/* Spacer */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Strip */}
        <section>
          <div className="glass-brutal border-2 border-primary p-12">
            <div className="text-center mb-12">
              <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
                Proven <span className="text-neon-purple">Impact</span>
              </h2>
              <p className="font-roboto text-lg text-muted-foreground">
                Measurable results that drive sustainable success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="font-eurostile text-4xl font-bold text-neon-cyan">
                    {metric.number}
                  </div>
                  <div className="font-eurostile text-lg font-semibold text-foreground">
                    {metric.label}
                  </div>
                  <div className="font-roboto text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="glass-primary" size="lg" className="group">
                Schedule Strategic Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;