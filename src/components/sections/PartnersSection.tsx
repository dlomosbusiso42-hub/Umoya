import { Handshake } from "lucide-react";
import medfoxImage from "@/assets/team/MEDFOX-185-CTHS-A+-049.jpg";
import vuumaLogo from "@/assets/partners/logos/vuuma_collaborations_logo.jpg";
import inventEngineeringLogo from "@/assets/partners/logos/Invent Engineering Logo.png";
import foxolutionLogo from "@/assets/partners/logos/Foxolution Logo.png";
import gablerLogo from "@/assets/partners/logos/Gabler_Medical_Logo.jpg";
import simineLogo from "@/assets/partners/logos/SIMINE Logo.jpg";
import rightToCareLogo from "@/assets/partners/logos/Right To Care Logo.png";
import usaidLogo from "@/assets/partners/logos/USAID Logo.jpg";

const partners = [
  {
    id: "vuuma",
    name: "Vuuma",
    description: "Strategic partner supporting Umoya's mission across South Africa.",
    logo: vuumaLogo,
  },
  {
    id: "invent-engineering",
    name: "Invent Engineering",
    description: "Innovation partner providing engineering and design capabilities.",
    logo: inventEngineeringLogo,
  },
  {
    id: "foxolution",
    name: "Foxolution",
    description: "Technology partner strengthening Umoya's digital and product innovation capabilities.",
    logo: foxolutionLogo,
  },
  {
    id: "gabler",
    name: "Gabler",
    description: "Technical partner enabling manufacturing excellence.",
    logo: gablerLogo,
  },
  {
    id: "simine",
    name: "SiMINE",
    description: "Partner bringing mining and industrial expertise to healthcare solutions.",
    logo: simineLogo,
  },
  {
    id: "right-to-care",
    name: "Right to Care NPO",
    description: "NPO partner facilitating training and deployment across Southern Africa.",
    logo: rightToCareLogo,
  },
  {
    id: "usaid",
    name: "USAID",
    description: "Funding and support partner for the Madwaleni Hospital oxygen project.",
    logo: usaidLogo,
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Trusted Partners</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built on <span className="text-gradient-teal">Strong Partnerships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our collaborative network spans engineering firms, NGOs, and international development organisations — all united by a shared commitment to better healthcare.
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <div
              key={p.id}
              className="bg-card border border-border rounded-2xl p-6 card-hover flex items-start gap-4 group"
            >
              <div className="w-24 h-20 md:w-28 md:h-24 rounded-xl bg-white border border-border p-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  data-partner-logo={p.id}
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-border bg-card">
          <img
            src={medfoxImage}
            alt="Umoya team at partner engagement event"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Become a partner */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in partnering with Umoya to bring affordable healthcare solutions to more communities?
          </p>
          <a
            href="mailto:enquires@umoya.org.za"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
          >
            <Handshake className="w-4 h-4" />
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
