import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import umoyaLogo from "@/assets/umoya-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Values", href: "#values" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[hsl(215,55%,8%)]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center group hover:opacity-90 transition-opacity"
        >
          <img
            src={umoyaLogo}
            alt="Umoya"
            className="h-9 w-auto group-hover:scale-105 transition-transform"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm text-white/75 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNav("#contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-5"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[hsl(215,55%,10%)]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNav("#contact")}
            className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
