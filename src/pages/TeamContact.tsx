import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import drAshafaSaniAbdullahi from "@/assets/team/dr-ashafa-sani-abdullahi.jpg";
import drAminaHassan from "@/assets/team/dr-amina-hassan.jpg";
import drJamesAdebayo from "@/assets/team/dr-james-adebayo.jpg";
import profDavidOkafor from "@/assets/team/prof-david-okafor.jpg";
import drChukwumaEzike from "@/assets/team/dr-chukwuma-ezike.jpg";
import drIbrahimMohammed from "@/assets/team/dr-ibrahim-mohammed.jpg";

const TeamContact = () => {
  const teamMembers = [
    {
      name: "Friday Adagache",
      role: "Chief Executive Officer",
      image: drAshafaSaniAbdullahi,
      description: "Visionary tech leader driving AI-powered innovation in life sciences intelligence"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Chief Product Officer",
      image: drAminaHassan,
      description: "Product innovator with expertise in AI-driven regulatory automation and compliance platforms"
    },
    {
      name: "Dr. James Adebayo",
      role: "VP of Growth & Partnerships",
      image: drJamesAdebayo,
      description: "Growth strategist driving platform adoption and strategic partnerships with biotech leaders"
    },
    {
      name: "Prof. David Okafor",
      role: "Chief Science Officer",
      image: profDavidOkafor,
      description: "Clinical AI expert ensuring scientific rigor in platform algorithms and development intelligence"
    },
    {
      name: "Dr. Chukwuma Ezike",
      role: "Chief Technology Officer",
      image: drChukwumaEzike,
      description: "AI/ML architect leading platform development and scalable cloud infrastructure"
    },
    {
      name: "Dr. Ibrahim Mohammed",
      role: "VP of Data & Analytics",
      image: drIbrahimMohammed,
      description: "Data scientist specializing in market intelligence algorithms and predictive analytics"
    }
  ];

  const testimonials = [
    {
      quote: "BioVital's platform enabled us to achieve FDA breakthrough designation 6 months faster with automated regulatory tracking. The compliance dashboard is a game-changer.",
      author: "Prof. David Okafor",
      role: "CMO, NeuroPharma Solutions",
      image: profDavidOkafor
    },
    {
      quote: "The AI-powered market intelligence was instrumental in our $75M Series C funding. Real-time analytics gave investors complete confidence in our projections.",
      author: "Dr. James Adebayo",
      role: "VP Commercial Strategy, BioCure Therapeutics",
      image: drJamesAdebayo
    },
    {
      quote: "BioVital's automated valuation engine transformed our pipeline analysis. The platform identified $200M in previously hidden value with predictive modeling.",
      author: "Dr. Amina Hassan",
      role: "Chief Development Officer, Precision Bio",
      image: drAminaHassan
    },
    {
      quote: "The partnership intelligence module was crucial in structuring our pharma deal. AI-driven term matching exceeded our expectations by 40%.",
      author: "Dr. Chukwuma Ezike",
      role: "CTO, MedTech Innovations",
      image: drChukwumaEzike
    },
    {
      quote: "BioVital's market access analytics opened 12 new markets, generating $150M in projected revenue. The automated reporting saves our team 20 hours weekly.",
      author: "Dr. Ibrahim Mohammed",
      role: "VP Business Development, Global Health Ventures",
      image: drIbrahimMohammed
    },
    {
      quote: "BioVital's platform transformed our decision-making with real-time AI insights. The predictive risk scoring saved us from a $50M strategic misstep.",
      author: "Friday Adagache",
      role: "CEO, African Therapeutics Consortium",
      image: drAshafaSaniAbdullahi
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="font-eurostile text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-neon-cyan">Leadership</span> Team
            </h1>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class experts driving innovation at the intersection of science, strategy, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card border border-card-border glow-hover group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`Nigerian — ${member.name} — ${member.role}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-eurostile text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="font-roboto text-sm text-neon-purple font-medium">
                        {member.role}
                      </p>
                    </div>
                    <p className="font-roboto text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-eurostile text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client <span className="text-neon-purple">Testimonials</span>
            </h2>
            <p className="font-roboto text-lg text-muted-foreground">
              Hear from the industry leaders who've transformed their organizations with BioVital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border border-card-border glow-hover h-full">
                <CardContent className="p-6 space-y-6 h-full flex flex-col">
                  <blockquote className="font-roboto text-sm text-muted-foreground leading-relaxed italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={`Nigerian — ${testimonial.author} — ${testimonial.role}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-card-border"
                    />
                    <div>
                      <div className="font-eurostile font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </div>
                      <div className="font-roboto text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="glass-brutal border-2 border-primary p-12">
            <div className="text-center mb-12">
              <h2 className="font-eurostile text-3xl font-bold text-foreground mb-4">
                Ready to <span className="text-neon-cyan">Transform</span> Your Development Process?
              </h2>
              <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
                AI-Powered Intelligence. Real-Time Analytics. Automated Workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
...
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
...
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-eurostile font-semibold text-foreground">Email</h3>
                      <p className="font-roboto text-muted-foreground">tech@biovital.technology</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="neon-outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-left">
                <div className="space-y-6">
                  <h3 className="font-eurostile text-2xl font-bold text-foreground">
                    Start Your Free Trial Today
                  </h3>
                  <p className="font-roboto text-muted-foreground leading-relaxed">
                    Experience the power of AI-driven biotech intelligence. Get instant access to our platform 
                    with a 14-day free trial—no credit card required. See how automated regulatory tracking, 
                    real-time analytics, and intelligent workflows can transform your development process.
                  </p>
                  <Button variant="glass-primary" size="lg" className="group">
                    Start Free Trial
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamContact;