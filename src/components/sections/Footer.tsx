import { NavLink } from "@/components/NavLink";
import { Wind, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Impact", to: "/impact" },
    { label: "Team", to: "/team" },
    { label: "Values", to: "/values" },
    { label: "Partners", to: "/partners" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-orange-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Wind className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-orange-900 font-bold text-xl tracking-tight">UMOYA</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-xs">
              A social enterprise bringing context-appropriate medical technology to low-resource settings across Africa. Innovation in the Air.
            </p>
            <p className="text-slate-500 text-xs">
              Umoya Org (Pty) Ltd<br />
              Company Reg No: 2016/320695/07<br />
              VAT: 4410280442<br />
              SAHPRA Licence number: 00002208MD
            </p>
          </div>

          <div>
            <h4 className="text-orange-900 font-semibold text-sm uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-slate-600 hover:text-orange-700 text-sm transition-colors"
                    activeClassName="font-semibold text-orange-900"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-900 font-semibold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:enquires@umoya.org.za" className="text-slate-600 hover:text-orange-700 text-sm transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  enquires@umoya.org.za
                </a>
              </li>
              <li>
                <a href="mailto:info@umoya.org.za" className="text-slate-600 hover:text-orange-700 text-sm transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  info@umoya.org.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Umoya Org (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built for impact. 100% profits reinvested in healthcare.
          </p>
          <p className="text-slate-500 text-xs">
            Created by Thabiso Nzalo
          </p>
        </div>
      </div>
    </footer>
  );
}
