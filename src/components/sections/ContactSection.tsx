import { Mail, Facebook, Linkedin, Youtube, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[hsl(215,55%,8%)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together<br />
              <span className="text-gradient-teal">For Better Healthcare</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Whether you're a healthcare facility, potential partner, investor, or supporter — we'd love to hear from you. Umoya solutions are available across South Africa and beyond.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:umoyavent@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/40 hover:bg-white/8 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Email</p>
                  <p className="text-white font-medium">umoyavent@gmail.com</p>
                </div>
              </a>
              <a
                href="mailto:admin@umoya.org.za"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/40 hover:bg-white/8 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Admin Email</p>
                  <p className="text-white font-medium">admin@umoya.org.za</p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              <p className="text-white/40 text-sm">Follow us:</p>
              {[
                { icon: Facebook, href: "https://www.facebook.com/umoyaproject/", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/umoya-project/", label: "LinkedIn" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCw4VFNiIgUWUbKvOj-ArZcQ", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:umoyavent@gmail.com";
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wide block mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Jacob"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wide block mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Jacob17@gmail.com"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide block mb-2">Organisation (optional)</label>
                <input
                  type="text"
                  placeholder="NGO"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs or how you'd like to get involved..."
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
