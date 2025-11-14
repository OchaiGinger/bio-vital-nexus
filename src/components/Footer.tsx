import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="_B Logo Design.png" alt="BioVital Logo" className="h-8" />
              <div className="font-eurostile text-2xl font-bold text-neon-cyan">
                BIO<span className="text-neon-purple">VITAL</span>
              </div>
            </div>
            <p className="text-muted-foreground font-roboto text-sm leading-relaxed">
              AI-Powered Life Sciences Intelligence Platform
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-eurostile font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span className="font-roboto">+234 803 084 8090</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="font-roboto">
                  25 Danube Street, Maitama<br />
                  Abuja, FCT, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span className="font-roboto">tech@biovital.technology</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-eurostile font-semibold text-foreground">Platform Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-roboto">
              <li>Development Intelligence</li>
              <li>Automated Asset Valuation</li>
              <li>Regulatory Intelligence Hub</li>
              <li>Market Access Analytics</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-roboto">
            © 2025 BioVital. All rights reserved. AI-Powered Life Sciences Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;