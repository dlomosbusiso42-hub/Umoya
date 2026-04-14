import { ArrowRight, Handshake, HeartHandshake, Mail, Package2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const quickFacts = [
  { value: "3", label: "Core product lines" },
  { value: "10+", label: "Countries reached" },
  { value: "11+", label: "Team specialists" },
];

export default function HomeOverviewSection() {
  return (
    <section className="relative py-24 bg-background border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who is Umoya?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A collective solving real healthcare challenges</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Umoya brings together engineers, doctors, designers, and technical teams to develop context-appropriate medical technology at affordable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We started in East London during the COVID-19 crisis and expanded across South Africa as a mission-led social enterprise focused on effectiveness, availability, and affordability.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/about">Learn More About Umoya</Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">At a glance</p>
            <div className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-background px-5 py-5">
                  <p className="text-3xl font-bold text-foreground mb-1">{fact.value}</p>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Package2 className="h-5 w-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">Our Products</p>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">Built for resource-constrained environments</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            From respiratory care to maternal and infant support, our product portfolio is designed for practical deployment in healthcare systems where reliability and affordability matter most.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "OxERA",
              "MaternaWell",
              "OptiRamp",
            ].map((name) => (
              <div key={name} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">{name}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
            <Link to="/products">Explore Products</Link>
          </Button>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Package2 className="h-5 w-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">Our Projects</p>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">Infrastructure delivery beyond individual products</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Umoya also delivers larger healthcare implementation work, including oxygen infrastructure projects that require design, installation, and long-term operational support.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-3xl">
            {["Medical Oxygen Plant"].map((name) => (
              <div key={name} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-foreground">{name}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
            <Link to="/projects">Explore Projects</Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="h-5 w-5 text-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">Core Values</p>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">The principles behind every solution</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Integrity, social justice, inclusiveness, and people before profits are central to how we design, manufacture, and deploy healthcare technology.
            </p>
            <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              <Link to="/values">View Our Values</Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-orange-50 p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="h-5 w-5 text-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">Trusted Partners</p>
            </div>
            <h3 className="text-3xl font-bold text-orange-950 mb-4">Collaboration drives our impact</h3>
            <p className="text-orange-950/75 leading-relaxed mb-8">
              We work with NGOs, engineering organisations, health institutions, and funding partners to scale access to better care.
            </p>
            <Button asChild size="lg" variant="outline" className="border-orange-200 bg-white text-orange-900 hover:bg-orange-100">
              <Link to="/partners">See Partners</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">Get In Touch</p>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">Ready to work together?</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              If you are interested in using Umoya solutions or discussing collaboration, visit our contact page for partner and customer enquiries.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Contact Umoya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Impact", href: "/impact" },
            { title: "Projects", href: "/projects" },
            { title: "Team", href: "/team" },
            { title: "Partners", href: "/partners" },
            { title: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              <span className="inline-flex items-center gap-2">
                {item.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
          </div>
      </div>
    </section>
  );
}