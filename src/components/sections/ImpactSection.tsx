import { MapPin, HeartHandshake, Zap, Globe2 } from "lucide-react";
import sponsorImage from "@/assets/sponsor.png";

const impacts = [
  {
    icon: MapPin,
    title: "Madwaleni Hospital — PSA Oxygen Plant",
    location: "Eastern Cape, South Africa",
    description:
      "Designed, constructed, delivered and commissioned a containerised pressure swing adsorption (PSA) oxygen manufacturing plant at a remote rural hospital. The plant operates continuously, ensuring a steady affordable oxygen supply directly to wards and enabling cylinder filling for satellite clinics. Umoya remotely monitors performance and provides ongoing maintenance.",
    highlight: "5-month project",
    partner: "Right to Care NPO & USAID",
  },
  {
    icon: HeartHandshake,
    title: "Healthcare Worker Training — eSwatini",
    location: "Eswatini (in partnership with Right to Care NPO)",
    description:
      "Right to Care procured several OxERA™ units for Swaziland. Umoya compiled and delivered a concise two-day training course covering device assembly, patient management, troubleshooting clinical scenarios, and off-label use for non-COVID pneumonia patients. Attendees left empowered to maximise device effectiveness.",
    highlight: "2-day training program",
    partner: "Right to Care NPO",
  },
  {
    icon: Zap,
    title: "National Ventilator Project",
    location: "South Africa",
    description:
      "Initially aligned with the National Ventilator Project during COVID-19. The team's doctors quickly identified that simpler, more affordable designs could achieve equally good clinical outcomes. This philosophy drove the development of the OxERA™ — reducing ICU load and enabling treatment in field and district hospitals.",
    highlight: "7-week design cycle",
    partner: "National Initiative",
  },
  {
    icon: Globe2,
    title: "Expanding Across the Continent",
    location: "Sub-Saharan Africa",
    description:
      "Umoya has expanded its product offering to provide context-appropriate and affordable solutions to some of the greatest medical needs on the continent. Products and services are designed cognisant of the infrastructure and staffing constraints in low-resource settings while maintaining broad clinical appeal.",
    highlight: "Pan-African vision",
    partner: "Multiple partners",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-[hsl(215,55%,8%)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Real-World Impact</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making a Difference <span className="text-gradient-teal">On the Ground</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From remote rural hospitals to cross-border training programs — real projects that have saved lives and transformed healthcare delivery.
          </p>
        </div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                    <p className="text-primary/80 text-sm mt-1">{item.location}</p>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-primary text-xs font-semibold bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                    {item.highlight}
                  </span>
                  <span className="text-white/40 text-xs">{item.partner}</span>
                </div>
              </div>
            );
          })}
        </div>

        <figure className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6">
          <img
            src={sponsorImage}
            alt="Umoya sponsorship highlights"
            className="w-full rounded-xl border border-white/10 object-cover"
            loading="lazy"
          />
          <figcaption className="text-white/80 text-sm md:text-base mt-4 leading-relaxed">
            Umoya sponsored 6 medical students to attend. We are sending one to the Model United Nations Conference in S Korea.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
