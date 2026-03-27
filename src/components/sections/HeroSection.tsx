import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Stethoscope, Users, Globe } from "lucide-react";

const stats = [
  { icon: Stethoscope, value: "3+", label: "Medical Products" },
  { icon: Users, value: "11+", label: "Team Specialists" },
  { icon: Globe, value: "2+", label: "Countries Reached" },
];

export default function HeroSection() {
  const scroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,8%)]/70 via-[hsl(215,55%,8%)]/50 to-[hsl(215,55%,8%)]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Innovation in the Air
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          Breathing Life Into
          <br />
          <span className="text-gradient-teal">African Healthcare</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          A collective of engineers, doctors & designers delivering context-appropriate medical technology at affordable prices for resource-constrained environments across Africa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button
            size="lg"
            onClick={() => scroll("#products")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30"
          >
            Explore Our Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scroll("#about")}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-white/5 backdrop-blur-sm px-8 py-6 text-base font-semibold"
          >
            Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-3xl font-bold text-white">{value}</span>
              <span className="text-sm text-white/60 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
