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
      name: "Dr. Ashafa Sani Abdullahi",
      role: "Chief Executive Officer",
      image: drAshafaSaniAbdullahi,
      description: "20+ years leading biotech strategy and regulatory affairs across global markets"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Senior Director of Regulatory Affairs",
      image: drAminaHassan,
      description: "Expert in FDA/EMA submissions with 50+ successful regulatory approvals"
    },
    {
      name: "Dr. James Adebayo",
      role: "VP Commercial Strategy",
      image: drJamesAdebayo,
      description: "Strategic leader in market access and commercial optimization for emerging markets"
    },
    {
      name: "Prof. David Okafor",
      role: "Chief Medical Officer",
      image: profDavidOkafor,
      description: "Clinical development expert with extensive experience in oncology and rare diseases"
    },
    {
      name: "Dr. Chukwuma Ezike",
      role: "Director of Technology & Analytics",
      image: drChukwumaEzike,
      description: "AI/ML specialist driving data-driven insights and predictive modeling platforms"
    },
    {
      name: "Dr. Ibrahim Mohammed",
      role: "Director of Market Access",
      image: drIbrahimMohammed,
      description: "Health economics and market access strategist for Sub-Saharan Africa"
    }
  ];

  const testimonials = [
    {
      quote: "BioVital's regulatory strategy enabled us to achieve FDA breakthrough therapy designation 6 months ahead of schedule. Their expertise in navigating complex approval pathways is exceptional.",
      author: "Prof. David Okafor",
      role: "CMO, NeuroPharma Solutions",
      image: profDavidOkafor
    },
    {
      quote: "The commercial strategy insights provided by BioVital were instrumental in our $75M Series C funding. Their market intelligence gave investors complete confidence in our go-to-market approach.",
      author: "Dr. James Adebayo",
      role: "VP Commercial Strategy, BioCure Therapeutics",
      image: drJamesAdebayo
    },
    {
      quote: "Working with BioVital transformed our asset valuation process. Their proprietary analytics helped us identify $200M in previously unrecognized value across our pipeline.",
      author: "Dr. Amina Hassan",
      role: "Chief Development Officer, Precision Bio",
      image: drAminaHassan
    },
    {
      quote: "BioVital's technology transfer expertise was crucial in structuring our partnership with global pharma. They secured terms that exceeded our expectations by 40%.",
      author: "Dr. Chukwuma Ezike",
      role: "CTO, MedTech Innovations",
      image: drChukwumaEzike
    },
    {
      quote: "The market access strategy developed by BioVital opened doors in 12 new markets, generating $150M in projected revenue. Their understanding of regional dynamics is unmatched.",
      author: "Dr. Ibrahim Mohammed",
      role: "VP Business Development, Global Health Ventures",
      image: drIbrahimMohammed
    },
    {
      quote: "BioVital's due diligence process identified critical risks that saved our company from a costly strategic misstep. Their thoroughness and expertise are world-class.",
      author: "Dr. Ashafa Sani Abdullahi",
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
                Ready to <span className="text-neon-cyan">Accelerate</span> Your Assets?
              </h2>
              <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
                Advancing Life Sciences. Optimizing Assets. Transforming Outcomes.
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
                    Schedule a Strategic Consultation
                  </h3>
                  <p className="font-roboto text-muted-foreground leading-relaxed">
                    Discover how BioVital can accelerate your asset development, optimize regulatory pathways, 
                    and unlock maximum market value. Our strategic consultation will provide actionable insights 
                    tailored to your specific challenges and objectives.
                  </p>
                  <Button variant="glass-primary" size="lg" className="group">
                    Schedule Consultation
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