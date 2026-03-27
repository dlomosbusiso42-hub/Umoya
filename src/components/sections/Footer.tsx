import { Wind, Facebook, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const scroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(215,60%,6%)] border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Wind className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">UMOYA</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              A social enterprise bringing context-appropriate medical technology to low-resource settings across Africa. Innovation in the Air.
            </p>
            <p className="text-white/30 text-xs">
              Umoya Org (Pty) Ltd<br />
              Company Reg No: 2016/320695/07
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                ["About", "#about"],
                ["Products", "#products"],
                ["Impact", "#impact"],
                ["Team", "#team"],
                ["Values", "#values"],
                ["Partners", "#partners"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <button
                    onClick={() => scroll(href)}
                    className="text-white/50 hover:text-primary text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:umoyavent@gmail.com" className="text-white/50 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  umoyavent@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:admin@umoya.org.za" className="text-white/50 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  admin@umoya.org.za
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: Facebook, href: "https://www.facebook.com/umoyaproject/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/umoya-project/" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCw4VFNiIgUWUbKvOj-ArZcQ" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/30 hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Umoya Org (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built for impact. 100% profits reinvested in healthcare.
          </p>
          <p className="text-white/30 text-xs">
            Created by Thabiso Nzalo
          </p>
        </div>
      </div>
    </footer>
  );
}
