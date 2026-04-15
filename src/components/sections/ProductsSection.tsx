import oxeraProduct from "@/assets/oxera-product.jpg";
import maternaWellProduct from "@/assets/MartenaWell.png";
import optiRampProduct from "@/assets/Opti-Ramp.png";
import { Wind, Baby, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Wind,
    name: "OxERA™",
    tagline: "Respiratory Support Device",
    description:
      "The OxERA™ is a non invasive respiratory support device designed to assist patients with breathing difficulties. It bridges the gap in respiratory therapy for resource constrained healthcare facilities across Africa and beyond.",
    brochureLink: "/OxERA-sales-clinical-brochure.pdf",
    clinicalLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9121766/#sec0003",
    features: [
      "CPAP / non invasive ventilation",
      "Designed for low resource settings",
      "Oxygen efficient design",
      "Simple assembly & operation",
      "CE & SAHPRA considerations",
    ],
    image: oxeraProduct,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    icon: Baby,
    name: "MaternaWell",
    tagline: "Maternal Healthcare Solution",
    description:
      "A dedicated maternal healthcare product addressing critical gaps in obstetric and neonatal care within low resource environments. Designed to improve outcomes for mothers and newborns where sophisticated equipment is unavailable.",
    brochureLink: "/MaternaWell%20Tray_Updated_2025.pdf",
    instructionsLink: "/MaternaWell-instructions-for-use-v2.1.pdf",
    features: [
      "Maternal & neonatal care",
      "Affordable & portable",
      "Field hospital compatible",
      "Low maintenance",
    ],
    image: maternaWellProduct,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    icon: TrendingUp,
    name: "OptiRamp",
    tagline: "Oxygen Optimisation",
    description:
      "A solution focused on optimising oxygen delivery and usage efficiency in clinical settings. Critical for environments where oxygen supply is constrained, addressing one of the biggest challenges identified during the COVID-19 pandemic.",
    brochureLink: "/OptiRamp%20Brochure%20A4%20fold_2024_0724%20(1).pdf",
    features: [
      "Oxygen delivery optimisation",
      "Compatible with existing infrastructure",
      "Real time monitoring",
      "Scalable deployment",
    ],
    image: optiRampProduct,
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
            Context Appropriate <span className="text-gradient-teal">Medical Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bridging gaps in current healthcare therapy with cost effective alternatives designed for the realities of low resource clinical environments.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-12">
          {/* OxERA featured */}
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
              <p className="mb-6">
                <a
                  href={products[0].clinicalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  View OxERA clinical article
                </a>
              </p>
              <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
                <iframe
                  src={products[0].brochureLink}
                  title="OxERA brochure preview"
                  className="w-full h-[420px]"
                />
              </div>
              <ul className="space-y-2 mb-8">
                {products[0].features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
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

          {/* MaternaWell featured layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${products[1].badgeColor} mb-4`}>
                {products[1].badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {products[1].name}
              </h3>
              <p className="text-primary font-medium mb-4">{products[1].tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-3">{products[1].description}</p>
              {products[1].brochureLink && (
                <p className="mb-6">
                  <a
                    href={products[1].brochureLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Download the MaternaWell brochure
                  </a>
                </p>
              )}
              {products[1].instructionsLink && (
                <p className="mb-6">
                  <a
                    href={products[1].instructionsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Download MaternaWell instructions for use
                  </a>
                </p>
              )}
              {products[1].brochureLink && (
                <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
                  <iframe
                    src={products[1].brochureLink}
                    title="MaternaWell brochure preview"
                    className="w-full h-[420px]"
                  />
                </div>
              )}
              <div className="mb-8 rounded-xl border border-border overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/Y-1wpHRZTA4"
                  title="MaternaWell product video"
                  className="w-full h-[320px] md:h-[420px]"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <ul className="space-y-2 mb-8">
                {products[1].features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <img
                src={products[1].image}
                alt="MaternaWell product render"
                loading="lazy"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-border"
              />
            </div>
          </div>

          {/* OptiRamp featured layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${products[2].badgeColor} mb-4`}>
                {products[2].badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {products[2].name}
              </h3>
              <p className="text-primary font-medium mb-4">{products[2].tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{products[2].description}</p>
              {products[2].brochureLink && (
                <p className="mb-6">
                  <a
                    href={products[2].brochureLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Download the OptiRamp brochure
                  </a>
                </p>
              )}
              {products[2].brochureLink && (
                <div className="mb-8 rounded-xl border border-border overflow-hidden bg-white">
                  <iframe
                    src={products[2].brochureLink}
                    title="OptiRamp brochure preview"
                    className="w-full h-[420px]"
                  />
                </div>
              )}
              <ul className="space-y-2 mb-8">
                {products[2].features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <img
                src={products[2].image}
                alt="OptiRamp"
                loading="lazy"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-border"
              />
            </div>
          </div>
        </div>

        {/* Consulting note */}
        <div className="mt-12 bg-[hsl(215,55%,10%)] border border-primary/20 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Consulting Services & Project Management</h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            We offer a range of project management, training and consulting services focused on finding solutions and removing barriers in the delivery of community healthcare. These include the development of new cost effective medical devices, products, and broader implementation work that supports reliable oxygen infrastructure in low resource settings.
          </p>
        </div>
      </div>
    </section>
  );
}
