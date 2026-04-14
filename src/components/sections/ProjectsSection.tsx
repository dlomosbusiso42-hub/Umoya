import oxygenPlant from "@/assets/Oxygen Plant.jpg";
import { Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "medical-oxygen-plant",
    icon: Factory,
    name: "Medical Oxygen Plant",
    tagline: "PSA Oxygen Generation Project",
    description:
      "A complete oxygen generation infrastructure project for healthcare facilities requiring dependable on-site oxygen production. Umoya supports the design, supply, installation, and long-term operational setup of PSA oxygen generation systems to reduce dependence on cylinders and improve continuity of care.",
    features: [
      "On-site oxygen generation",
      "PSA technology",
      "Design, supply, and installation",
      "Low maintenance operation",
      "Project management and support",
    ],
    image: oxygenPlant,
    badge: "Project",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
  },
];

export default function ProjectsSection() {
  const project = projects[0];

  return (
    <section id="projects" className="py-24 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Projects</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Healthcare <span className="text-gradient-teal">Infrastructure Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Some Umoya work extends beyond standalone products. Our projects focus on delivering complete implementation outcomes for healthcare systems that need robust infrastructure and ongoing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
          <div>
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor} mb-4`}>
              <project.icon className="w-3.5 h-3.5" />
              {project.badge}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {project.name}
            </h3>
            <p className="text-primary font-medium mb-4">{project.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {feature}
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
              src={project.image}
              alt="Medical Oxygen Plant project"
              loading="lazy"
              className="relative rounded-2xl w-full object-cover shadow-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}