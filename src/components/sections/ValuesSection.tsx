import { Shield, Scale, Heart, Users2 } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We are committed to being ethical in all we do, from product design to how we interact with partners, patients, and communities.",
    color: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/20 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Scale,
    title: "Social Justice",
    description: "We recognise that we live in an unequal society and our work is focused towards creating broader access to medical care and therapy for all.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/20 border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "People Before Profits",
    description: "We are passionate about who we are, what we stand for and the products we produce. All trading surplus is reinvested, never distributed as dividends.",
    color: "from-rose-500/20 to-rose-600/5",
    iconBg: "bg-rose-500/20 border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    icon: Users2,
    title: "Inclusiveness",
    description: "We believe everyone in all parts of our business has something valuable to contribute, from doctors to engineers, designers to 3D printing specialists.",
    color: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/20 border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="py-24 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-teal">Core Values</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            The principles that guide every decision we make, from product design to community engagement.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`bg-gradient-to-br ${v.color} border border-border rounded-2xl p-7 card-hover flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl ${v.iconBg} border flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${v.iconColor}`} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{v.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission banner */}
        <div className="mt-12 relative overflow-hidden bg-[hsl(215,55%,10%)] rounded-2xl p-10 text-center border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="relative">
            <p className="text-2xl md:text-3xl font-bold text-white mb-3">
              "Our purpose is to bring context appropriate medical technology to the market at affordable prices."
            </p>
            <p className="text-white/50 text-sm">Umoya Purpose Statement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
