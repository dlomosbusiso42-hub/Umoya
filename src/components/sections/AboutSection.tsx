import teamPhoto from "@/assets/team-photo.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Story</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Born From a Crisis,<br />
              <span className="text-gradient-teal">Built for Impact</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                The <strong className="text-foreground">UMOYA project</strong> originated during the COVID-19 pandemic when a significant gap emerged in the provision of respiratory care across South Africa and other developing countries. A dedicated group of individuals — mechanical engineers, doctors, designers, 3D printing specialists, and project managers — voluntarily came together to address this crisis.
              </p>
              <p>
                The initial recognition came from our team's doctors, <strong className="text-foreground">Dr Craig Parker</strong> and <strong className="text-foreground">Dr Brendan Toy</strong>, based in ICU and anaesthetic departments of state hospitals in the Eastern Cape. The team rapidly iterated through concepts, producing a working prototype within <strong className="text-foreground">2 weeks</strong> and a finalised design within <strong className="text-foreground">7 weeks</strong>.
              </p>
              <p>
                Umoya is a registered South African social enterprise (<strong className="text-foreground">Umoya Org (Pty) Ltd; Reg No: 2016/320695/07</strong>). We reinvest 100% of our trading surplus into developing new products or donating to organisations with similar objectives — we do not distribute dividends to shareholders.
              </p>
              <p>
                Today, we have expanded across South Africa with manufacturing and technical expertise spread nationwide, continuously exploring context-appropriate medical solutions for our continent.
              </p>
            </div>

            {/* Key facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2020" },
                { label: "Base", value: "East London, SA" },
                { label: "Reg No.", value: "2016/320695/07" },
                { label: "Model", value: "Social Enterprise" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-muted/60 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src={teamPhoto}
              alt="Umoya team collaborating"
              loading="lazy"
              width={900}
              height={600}
              className="relative rounded-2xl w-full object-cover shadow-2xl border border-border"
            />
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 bg-[hsl(215,55%,10%)] border border-primary/30 rounded-2xl p-5 max-w-xs shadow-2xl">
              <p className="text-sm text-white/80 italic leading-relaxed">
                "Our mission is to increase the effectiveness, availability and affordability of health care devices."
              </p>
              <p className="text-primary text-xs font-semibold mt-2 uppercase tracking-wide">— Umoya Mission</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Watch More</span>
          </div>
          <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              See Umoya In Action
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Learn more about the vision, context and medical innovation behind Umoya through this featured video.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border bg-black shadow-xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/GdaljnJ82Cs"
                title="Umoya video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
