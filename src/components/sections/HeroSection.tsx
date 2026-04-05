import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Stethoscope, Users, Globe } from "lucide-react";

const stats = [
  { icon: Stethoscope, value: "3+", label: "Medical Products" },
  { icon: Users, value: "11+", label: "Team Specialists" },
  { icon: Globe, value: "2+", label: "Countries Reached" },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-200/80 via-white/80 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Innovation in the Air
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-950 leading-tight tracking-tight">
          Breathing Life Into
          <br />
          <span className="text-gradient-orange">Healthcare</span>
        </h1>

        <p className="text-lg md:text-xl text-orange-900/75 max-w-2xl leading-relaxed">
          A collective of engineers, doctors & designers delivering context-appropriate medical technology at affordable prices for resource-constrained environments globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button
            size="lg"
            onClick={() => navigate("/products")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30"
          >
            Explore Our Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/about")}
            className="border-orange-200 text-orange-900 hover:bg-orange-50 hover:border-orange-300 bg-white/90 backdrop-blur-sm px-8 py-6 text-base font-semibold"
          >
            Our Story
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-3xl font-bold text-orange-950">{value}</span>
              <span className="text-sm text-orange-900/60 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-900/70 hover:text-orange-900 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
