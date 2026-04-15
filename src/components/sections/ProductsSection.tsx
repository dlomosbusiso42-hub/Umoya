import oxeraProduct from "@/assets/oxera-product.jpg";
import maternaWellProduct from "@/assets/MartenaWell.png";
import optiRampProduct from "@/assets/Opti-Ramp.png";
import { Wind, Baby, TrendingUp } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

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
      "Positive expiratory pressure/ non invasive ventilation",
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
      "Real time monitoring",
      "Reusable",
    ],
    image: maternaWellProduct,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    icon: TrendingUp,
    name: "OptiRamp",
    tagline: "Optimise Alignment. Improve Airway Success",
    description:
      "The OptiRamp was developed to provide a simple, stable ramping solution, adequate for most patients' profiles.",
    brochureLink: "/OptiRamp%20Brochure%20A4%20fold_2024_0724%20(1).pdf",
    features: [
      "Simple, stable, adequate for most patient profiles",
      "Can be easily disinfected",
      "Covered in a robust material and water resistant",
      "Durable and long lasting",
    ],
    image: optiRampProduct,
    badge: "Available",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
];

function BrochurePreview({
  file,
  title,
}: {
  file: string;
  title: string;
}) {
  return (
    <div className="relative group mb-8 rounded-xl border border-border overflow-hidden bg-white">
      <div className="h-[420px] overflow-hidden flex items-start justify-center bg-slate-100">
        <Document
          file={file}
          loading={<div className="text-sm text-muted-foreground pt-6">Loading preview...</div>}
          error={<div className="text-sm text-muted-foreground pt-6">Preview unavailable</div>}
          noData={<div className="text-sm text-muted-foreground pt-6">No preview file found</div>}
        >
          <Page pageNumber={1} width={620} renderAnnotationLayer={false} renderTextLayer={false} />
        </Document>
      </div>
      <a
        href={`${file}#page=1`}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300"
        aria-label={`Download ${title} brochure`}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm">
          Download Brochure ↗
        </span>
      </a>
    </div>
  );
}

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
              <div className="relative group mb-6 rounded-xl border border-border overflow-hidden bg-card cursor-pointer">
                <a
                  href={products[0].clinicalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">PubMed Central · Clinical Article</p>
                      <p className="text-sm font-semibold text-foreground leading-snug mb-1">
                        OxERA: A Low-Cost CPAP Device for Use in Low-Resource Settings
                      </p>
                      <p className="text-xs text-muted-foreground">PMC9121766 · Respiratory Medicine</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm">
                      View Article ↗
                    </span>
                  </div>
                </a>
              </div>
              <BrochurePreview file={products[0].brochureLink} title={products[0].name} />
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
                <BrochurePreview file={products[1].brochureLink} title={products[1].name} />
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
                <BrochurePreview file={products[2].brochureLink} title={products[2].name} />
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
