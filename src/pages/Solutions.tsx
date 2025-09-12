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
  const consultingServices = [
    {
      icon: FlaskConical,
      title: "Drug Development Strategy",
      description: "End-to-end strategic guidance from preclinical through Phase III, optimizing development pathways and reducing time-to-market.",
      features: ["Clinical Trial Design", "Endpoint Selection", "Biomarker Strategy", "Risk Mitigation"]
    },
    {
      icon: TrendingUp,
      title: "Asset Valuation & Due Diligence",
      description: "Comprehensive asset assessment leveraging proprietary analytics and deep therapeutic area expertise.",
      features: ["Market Analysis", "Competitive Intelligence", "Risk Assessment", "Value Modeling"]
    },
    {
      icon: Shield,
      title: "Regulatory Strategy & Compliance",
      description: "Navigate complex regulatory landscapes with expert guidance across global markets and therapeutic areas.",
      features: ["FDA/EMA Strategy", "Regulatory Submissions", "Compliance Frameworks", "Post-Market Surveillance"]
    },
    {
      icon: Globe,
      title: "Market Access & Commercialization",
      description: "Optimize market entry strategies and maximize commercial potential across diverse healthcare systems.",
      features: ["Pricing Strategy", "Market Access", "Commercial Planning", "Launch Excellence"]
    },
    {
      icon: GitBranch,
      title: "Technology Transfer & Licensing",
      description: "Facilitate strategic partnerships and optimize technology transfer for maximum value creation.",
      features: ["IP Strategy", "Partnership Development", "Deal Structuring", "Technology Assessment"]
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Identify and structure high-value partnerships to accelerate development and market access.",
      features: ["Partner Identification", "Deal Negotiation", "Alliance Management", "Value Creation"]
    }
  ];

  const technologyStack = [
    { icon: Brain, title: "AI/ML Analytics", description: "Advanced algorithms for predictive modeling" },
    { icon: Dna, title: "Genomics Platforms", description: "Next-gen sequencing and analysis tools" },
    { icon: Settings, title: "RegTech Solutions", description: "Automated regulatory compliance tracking" },
    { icon: BarChart3, title: "Data Analytics", description: "Real-time market intelligence dashboards" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable, secure data processing" },
    { icon: Lock, title: "Blockchain Security", description: "Immutable audit trails and data integrity" }
  ];

  const methodology = [
    { phase: "Assessment", description: "Comprehensive analysis of current state and opportunities" },
    { phase: "Planning", description: "Strategic roadmap development with clear milestones" },
    { phase: "Analysis", description: "Deep-dive evaluation using proprietary methodologies" },
    { phase: "Implementation", description: "Execution support with continuous optimization" },
    { phase: "Optimization", description: "Ongoing performance monitoring and refinement" }
  ];

  const metrics = [
    { number: "150+", label: "Assets Optimized", description: "Successful strategic transformations" },
    { number: "$2.5B+", label: "Value Created", description: "In regulatory approvals facilitated" },
    { number: "40%", label: "Faster Approvals", description: "Average reduction in regulatory timeline" },
    { number: "98%", label: "Client Satisfaction", description: "Sustained partnership success rate" }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consulting Services */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="font-eurostile text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-neon-cyan">Solutions</span>
            </h1>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end consulting services designed to accelerate your asset development and maximize market success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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
            <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
              Our <span className="text-neon-cyan">Methodology</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              A proven 5-phase process for delivering transformational results
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