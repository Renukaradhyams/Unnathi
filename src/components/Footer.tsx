import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Download, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-charcoal-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-heading font-bold text-primary-foreground">UNNATHI</span>
              <span className="text-2xl font-heading font-medium text-steel ml-1">CNC</span>
            </div>
            <p className="text-sm text-steel leading-relaxed mb-4">
              Leading precision engineering and CNC machining company established in 2007, specializing in high-precision machined components and assemblies for global customers across multiple engineering sectors.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-lg bg-charcoal hover:bg-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Leadership", path: "/leadership" },
                { label: "Capabilities", path: "/capabilities" },
                { label: "Infrastructure", path: "/infrastructure" },
                { label: "Industries", path: "/industries" },
                { label: "Our Units", path: "/units" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-steel hover:text-primary-foreground transition-all duration-200 flex items-center gap-1 hover:gap-2">
                    <ArrowRight className="h-3 w-3" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {["Aerospace", "Automotive", "Industrial Machinery", "Electrical & Electronics", "Medical Equipment", "Agricultural Machinery", "Precision Engineering"].map((ind) => (
                <li key={ind}>
                  <Link to="/industries" className="text-sm text-steel hover:text-primary-foreground transition-all duration-200 flex items-center gap-1 hover:gap-2">
                    <ArrowRight className="h-3 w-3" /> {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-4">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-steel">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>Peenya Industrial Area, Bangalore – 560058, India</span>
              </li>
              <li className="flex gap-3 text-sm text-steel">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>080-41171792 | +91 9480686747</span>
              </li>
              <li className="flex gap-3 text-sm text-steel">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>rfq@unnathicnc.com</span>
              </li>
            </ul>
            <button className="mt-4 flex items-center gap-2 text-sm text-primary-foreground bg-primary/20 hover:bg-primary/30 transition-all duration-300 px-4 py-2.5 rounded-lg hover:scale-105">
              <Download className="h-4 w-4" /> Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal/50">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs text-steel/70">
          <p>© 2025 Unnathi CNC Technologies Pvt. Ltd. All rights reserved.</p>
          <p>AS9100D & ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
