import { ArrowUp } from "lucide-react";

const CampaignFooter = () =>
<footer className="border-t border-border bg-card py-12 mt-8 relative">
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="container">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-md gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">N</span>
            </div>
            <span className="font-display font-semibold">Nico Sanders</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Paid for by the authority of Friends of Nico Sanders, Lara Figures, Treasurer, P.O. Box 1060, Owings Mills, MD 21117.  Campaign material for Nico Sanders for MD Delegate, District 11A.</p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex flex-wrap gap-2">
            {[{ label: "Email Signup", href: "#updates" },
          { label: "Volunteer", href: "#volunteer" },
          { label: "Donate", href: "#donate" }].
          map((l) =>
          <a key={l.href} href={l.href}
          className="text-xs text-muted-foreground border border-border rounded-md px-3 py-2 hover:text-foreground hover:border-primary/20 transition-all">
                {l.label}
              </a>
          )}
          </div>
          <a href="#top" className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline transition-all group">
            Back to top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      


    </div>
  </footer>;


export default CampaignFooter;