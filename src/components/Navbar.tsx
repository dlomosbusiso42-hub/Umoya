import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import umoyaLogo from "@/assets/umoya-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Impact", to: "/impact" },
  { label: "Team", to: "/team" },
  { label: "Values", to: "/values" },
  { label: "Partners", to: "/partners" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={umoyaLogo} alt="Umoya" className="h-9 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 text-sm text-orange-700 rounded-md hover:text-orange-900 hover:bg-orange-50 transition-colors"
              activeClassName="text-orange-900 bg-orange-100 shadow-sm"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-5">
            <NavLink to="/contact">Get in Touch</NavLink>
          </Button>
        </div>

        <button
          className="md:hidden text-orange-900"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="w-full text-left px-3 py-3 text-orange-800 hover:text-orange-950 hover:bg-orange-50 rounded-lg transition-colors text-sm"
              activeClassName="font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground">
            <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Get in Touch</NavLink>
          </Button>
        </div>
      )}
    </header>
  );
}
