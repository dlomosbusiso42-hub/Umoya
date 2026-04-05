import { ArrowRight, BarChart3, Handshake, HeartHandshake, Mail, Package2, ScrollText, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "About",
    description: "See how Umoya grew from a crisis-response initiative into a social enterprise focused on practical healthcare innovation.",
    href: "/about",
    icon: ScrollText,
  },
  {
    title: "Products",
    description: "Browse our respiratory and maternal health solutions, product brochures, and technical information in one place.",
    href: "/products",
    icon: Package2,
  },
  {
    title: "Impact",
    description: "Explore where Umoya has delivered value through deployment, access, training, and healthcare outcomes.",
    href: "/impact",
    icon: BarChart3,
  },
  {
    title: "Team",
    description: "Meet the engineers, clinicians, designers, and operators behind Umoya's work.",
    href: "/team",
    icon: Users2,
  },
  {
    title: "Values",
    description: "Understand the principles that guide our product design, partnerships, and mission-driven operating model.",
    href: "/values",
    icon: HeartHandshake,
  },
  {
    title: "Partners",
    description: "View the organisations that collaborate with Umoya to expand affordable healthcare solutions.",
    href: "/partners",
    icon: Handshake,
  },
  {
    title: "Contact",
    description: "Find the right contact details for partnerships, quotes, customer enquiries, and official business information.",
    href: "/contact",
    icon: Mail,
  },
];

const quickFacts = [
  { value: "4", label: "Core product lines" },
  { value: "10+", label: "Countries reached" },
  { value: "11+", label: "Team specialists" },
];

export default function HomeOverviewSection() {
  return (
    <section className="relative py-24 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Home Overview</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            A clearer view of <span className="text-gradient-orange">what Umoya offers</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Home page now acts as a guide. It highlights the main areas of the website and helps visitors move quickly to the dedicated pages for full product, impact, team, partnership, and contact details.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              to={href}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-5">{description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">At a glance</p>
            <h3 className="text-3xl font-bold text-foreground mb-4">What visitors should understand in under a minute</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Umoya develops and delivers context-appropriate medical technology, supported by interdisciplinary expertise and partner collaboration. The deeper stories, documents, and technical details now live on their own pages, while Home stays focused on orientation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-background px-5 py-6">
                  <p className="text-3xl font-bold text-foreground mb-2">{fact.value}</p>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-orange-50 p-8 md:p-10 shadow-sm">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Next step</p>
            <h3 className="text-3xl font-bold text-orange-950 mb-4">Guide visitors toward the right page faster</h3>
            <p className="text-orange-950/75 leading-relaxed mb-8">
              Whether someone wants to review products, check organisational credibility, explore impact, or get in touch, the homepage now points them there without making them scroll through every full section.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-200 bg-white text-orange-900 hover:bg-orange-100">
                <Link to="/contact">Contact Umoya</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}