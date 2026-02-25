import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@config/navigation.config";
import { contactConfig } from "@config/contact.config";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-background/98 backdrop-blur-xl shadow-elevated border-b border-border/50"
          : "bg-charcoal/80 backdrop-blur-lg border-b border-transparent"
      )}
    >
      {/* Top bar */}
      <div className={cn(
        "bg-gradient-industrial transition-all duration-300 overflow-hidden",
        scrolled ? "max-h-0 py-0" : "max-h-10 py-1.5"
      )}>
        <div className="container flex items-center justify-between text-xs text-primary-foreground">
          <span>AS9100D & ISO 9001:2015 Certified Precision Manufacturing</span>
          <a href={`tel:${contactConfig.phones.landline.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1 hover:underline">
            <Phone className="h-3 w-3" /> {contactConfig.phones.landline}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <span className={cn(
              "text-2xl font-heading font-bold tracking-wider transition-all duration-300 group-hover:tracking-[0.2em]",
              scrolled ? "text-primary" : "text-primary-foreground"
            )}>
              UNNATHI
            </span>
            <span className={cn(
              "text-2xl font-heading font-medium ml-1 transition-colors duration-300",
              scrolled ? "text-foreground" : "text-steel"
            )}>
              CNC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationConfig.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-sm transition-colors flex items-center gap-1",
                  location.pathname === item.path
                    ? scrolled ? "text-primary" : "text-primary-foreground font-semibold"
                    : scrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", openDropdown === item.label && "rotate-180")} />}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={cn("absolute bottom-0 left-3 right-3 h-0.5 rounded-full", scrolled ? "bg-primary" : "bg-primary-foreground")}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-background/95 backdrop-blur-xl rounded-lg shadow-elevated py-2 min-w-[220px] mt-1 border border-border/50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:pl-5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/contact">
            <Button size="sm" className="ml-2 bg-gradient-industrial text-primary-foreground hover:opacity-90 shadow-industrial hover:shadow-none transition-all duration-300 hover:scale-105">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navigationConfig.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "block px-3 py-2.5 text-sm font-medium rounded-sm transition-all duration-200",
                      location.pathname === item.path
                        ? "text-primary bg-primary/5 border-l-2 border-primary"
                        : "text-foreground/80 hover:text-primary hover:pl-5"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link to="/contact" className="mt-2">
                <Button className="w-full bg-gradient-industrial text-primary-foreground">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
