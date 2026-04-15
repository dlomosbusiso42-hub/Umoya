import craigParker from "@/assets/team/craig-parker.png";
import brendanToy from "@/assets/team/brendan-toy.png";
import trevorRossouw from "@/assets/team/trevor-rossouw.png";
import daveMorris from "@/assets/team/dave-morris.png";
import garyLane from "@/assets/team/gary-lane.png";
import harrySinko from "@/assets/team/harry-sinko.png";
import antonyMello from "@/assets/team/antony-mello.png";
import alexRossouw from "@/assets/team/alex-rossouw.png";
import fransMeyer from "@/assets/team/frans-meyer.png";
import lindleyBarkhuyzen from "@/assets/team/lindley-barkhuyzen.png";
import tyranTesmer from "@/assets/team/tyran-tesmer.png";

const team = [
  { name: "Dr Craig Parker", role: "Lead Doctor", department: "Medical", photo: craigParker },
  { name: "Dr Brendan Toy", role: "Lead Doctor", department: "Medical", photo: brendanToy },
  { name: "Trevor Rossouw", role: "Engineer & Project Manager", department: "Engineering", photo: trevorRossouw },
  { name: "Dave Morris", role: "Engineer & Project Manager", department: "Engineering", photo: daveMorris },
  { name: "Gary Lane", role: "Systems Engineering & Project Management", department: "Systems", photo: garyLane },
  { name: "Harry Sinko", role: "Systems Engineering & Project Management", department: "Systems", photo: harrySinko },
  { name: "Antony Mello", role: "Operations Strategy", department: "Operations", photo: antonyMello },
  { name: "Alex Rossouw", role: "Design Engineer", department: "Design", photo: alexRossouw },
  { name: "Frans Meyer van der Merwe", role: "Design Engineer", department: "Design", photo: fransMeyer },
  { name: "Lindley Barkhuyzen", role: "Design Engineer", department: "Design", photo: lindleyBarkhuyzen },
  { name: "Tyran Tesmer", role: "3D Printing Support", department: "Manufacturing", photo: tyranTesmer },
];

const deptColors: Record<string, string> = {
  Medical: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Engineering: "bg-primary/20 text-primary border-primary/30",
  Systems: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Operations: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Manufacturing: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">The People</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-teal">Umoya Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A multidisciplinary collective of passionate experts who came together with a shared vision of saving lives. From ICUs to workshops, every skill matters.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-2xl p-6 card-hover flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 mb-4 group-hover:border-primary/50 transition-colors">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-bold text-foreground text-base leading-tight mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-xs mb-3 leading-snug">{member.role}</p>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${deptColors[member.department]}`}>
                {member.department}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline teaser */}
        <div className="mt-16 bg-muted/40 rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Innovation Timeline</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />
            <div className="space-y-8">
              {[
                { date: "17 Mar 2020", event: "Idea Inception", detail: "Dr Craig Parker conceives specification returning from UK before the flight ban." },
                { date: "20 Mar 2020", event: "Call for Collaboration", detail: "Dr Craig Parker puts out request for engineering, 3D printing, and hydraulics capability." },
                { date: "26 Mar 2020", event: "Concept Demo", detail: "Dr Craig Parker demonstrated a simple CPAP device using a diving CV." },
                { date: "2 Apr 2020", event: "Final Alpha Concept", detail: "Modifications and multiple versions result in a final alpha concept for a reciprocal valve." },
                { date: "Jan 2021", event: "OxERA® Device Launch", detail: "Finalised commercial product ready for deployment." },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-center`}>
                  <div className="flex-1 md:text-right md:pr-8">
                    {i % 2 === 0 ? (
                      <div className="bg-card border border-border rounded-xl p-4">
                        <p className="text-primary text-xs font-bold uppercase mb-1">{item.date}</p>
                        <p className="font-semibold text-foreground text-sm">{item.event}</p>
                        <p className="text-muted-foreground text-xs mt-1">{item.detail}</p>
                      </div>
                    ) : null}
                  </div>
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground shadow-md shadow-primary/40 flex-shrink-0 relative z-10" />
                  <div className="flex-1 md:pl-8">
                    {i % 2 !== 0 ? (
                      <div className="bg-card border border-border rounded-xl p-4">
                        <p className="text-primary text-xs font-bold uppercase mb-1">{item.date}</p>
                        <p className="font-semibold text-foreground text-sm">{item.event}</p>
                        <p className="text-muted-foreground text-xs mt-1">{item.detail}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
