import oxeraProduct from "@/assets/oxera-product.jpg";
import oxygenPlant from "@/assets/Oxygen Plant.jpg";
import { Wind, Baby, TrendingUp, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Wind,
    name: "OxERA™",
    tagline: "Flagship Respiratory Device",
    description:
      "Our first and flagship commercial product. The OxERA™ is a non-invasive respiratory support device designed to assist patients with breathing difficulties. It bridges the gap in respiratory therapy for resource-constrained healthcare facilities across Africa and beyond.",
    brochureLink: "/OxERA-sales-clinical-brochure.pdf",
    features: [
      "CPAP / non-invasive ventilation",
      "Designed for low-resource settings",
      "Oxygen-efficient design",
      "Simple assembly & operation",
      "CE & SAHPRA considerations",
    ],
    image: oxeraProduct,
    badge: "Flagship Product",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    icon: Baby,
    name: "MaternaWell",
    tagline: "Maternal Healthcare Solution",
    description:
      "A dedicated maternal healthcare product addressing critical gaps in obstetric and neonatal care within low-resource environments. Designed to improve outcomes for mothers and newborns where sophisticated equipment is unavailable.",
    brochureLink: "/MaternaWell-description-and-specification-Nov25.pdf",
    features: [
      "Maternal & neonatal care",
      "Affordable & portable",
      "Field hospital compatible",
      "Low maintenance",
    ],
    image: null,
    badge: "In Development",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    icon: TrendingUp,
    name: "OptiRamp",
    tagline: "Oxygen Optimisation",
    description:
      "A solution focused on optimising oxygen delivery and usage efficiency in clinical settings. Critical for environments where oxygen supply is constrained — addressing one of the biggest challenges identified during the COVID-19 pandemic.",
    brochureLink: null,
    features: [
      "Oxygen delivery optimisation",
      "Compatible with existing infrastructure",
      "Real-time monitoring",
      "Scalable deployment",
    ],
    image: null,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    icon: Factory,
    name: "Industrial Oxygen Plant",
    tagline: "PSA Oxygen Generation",
    description:
      "A complete oxygen generation infrastructure solution designed for healthcare facilities requiring on-site oxygen production. Our Industrial Oxygen Plant delivers cost-effective, reliable oxygen supply through pressure swing adsorption (PSA) technology, eliminating dependence on oxygen cylinders and reducing operational costs.",
    brochureLink: null,
    features: [
      "On-site oxygen generation",
      "PSA technology",
      "Low maintenance operation",
      "Complete installation support",
      "Project management included",
    ],
    image: oxygenPlant,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Solutions</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Context-Appropriate <span className="text-gradient-teal">Medical Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bridging gaps in current healthcare therapy with cost-effective alternatives designed for the realities of low-resource clinical environments.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-12">
          {/* OxERA — featured */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${products[0].badgeColor} mb-4`}>
                ⭐ {products[0].badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {products[0].name}
              </h3>
              <p className="text-primary font-medium mb-4">{products[0].tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-3">{products[0].description}</p>
              <p className="mb-6">
                <a
                  href={products[0].brochureLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Download the OxERA brochure
                </a>
              </p>
              <ul className="space-y-2 mb-8">
                {products[0].features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <img
                src={oxeraProduct}
                alt="OxERA respiratory device"
                loading="lazy"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-border"
              />
            </div>
          </div>

          {/* Other products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(1).map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="bg-card rounded-2xl border border-border p-8 card-hover"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{p.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{p.tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                  {p.brochureLink && (
                    <p className="mb-5">
                      <a
                        href={p.brochureLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline hover:text-primary/80 text-sm"
                      >
                        Download the {p.name} brochure
                      </a>
                    </p>
                  )}
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Consulting note */}
        <div className="mt-12 bg-[hsl(215,55%,10%)] border border-primary/20 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Consulting Services & Project Management</h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            We offer a range of project management, training and consulting services focused on finding solutions and removing barriers in the delivery of community healthcare. These include the development of new cost-effective medical devices, products and the supply of oxygen infrastructure — including full PSA oxygen generation plant design, supply, installation and support.
          </p>
        </div>
      </div>
    </section>
  );
}
