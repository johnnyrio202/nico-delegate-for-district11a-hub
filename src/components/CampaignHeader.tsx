import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Priorities", href: "#priorities" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

const CampaignHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 glass-header">
      <div className="container flex items-center justify-between py-3.5">
        <a href="#top" className="flex items-center gap-3" aria-label="Nico Sanders home">
          <div className="w-11 h-11 rounded-lg border border-border bg-muted flex items-center justify-center">
            <span className="text-gradient font-black text-lg">NS</span>
          </div>
          <div className="flex flex-col leading-tight">
            <strong className="text-sm tracking-wide">Nico Sanders</strong>
            <span className="text-xs text-muted-foreground">Delegate, District 11A</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2.5" aria-label="Site">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-sm text-muted-foreground border border-border hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#donate" className="px-3.5 py-2 rounded-full text-sm font-semibold border border-border hover:bg-muted/50 transition-colors">
            Donate
          </a>
          <a href="#volunteer" className="px-3.5 py-2 rounded-full text-sm font-semibold gradient-cta transition-all">
            Join the Team
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border px-4 pb-4 flex flex-col gap-2" aria-label="Mobile site">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <a href="#donate" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-sm font-semibold border border-border">
              Donate
            </a>
            <a href="#volunteer" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-sm font-semibold gradient-cta">
              Join the Team
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default CampaignHeader;
