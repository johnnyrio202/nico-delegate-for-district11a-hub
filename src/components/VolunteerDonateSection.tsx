import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Users, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VolunteerDonateSection = () => {
  const [volDone, setVolDone] = useState(false);

  const handleVolunteer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolDone(true);
    toast.success("Thank you for volunteering!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="volunteer" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass rounded-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                  <Users size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Volunteer</h2>
                  <p className="text-xs text-muted-foreground">People win campaigns</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                If you can spare an hour, you can help. Tell us how you want to plug in.
              </p>
              <form onSubmit={handleVolunteer} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vName" className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                    <input id="vName" name="name" autoComplete="name" required
                      className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="vPhone" className="text-xs text-muted-foreground uppercase tracking-wider">Phone</label>
                    <input id="vPhone" name="phone" autoComplete="tel"
                      className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="vEmail" className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
                  <input id="vEmail" name="email" type="email" autoComplete="email" required
                    className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                </div>
                <div>
                  <label htmlFor="vHelp" className="text-xs text-muted-foreground uppercase tracking-wider">How do you want to help?</label>
                  <textarea id="vHelp" name="help" placeholder="Canvassing, phones, hosting, data, social media…" rows={3}
                    className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg text-sm font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Sign Up to Volunteer <ArrowRight size={15} />
                </button>
                {volDone && <p className="text-xs text-primary">✓ Thank you! We'll be in touch.</p>}
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass rounded-xl p-8 h-full" id="donate">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                  <Heart size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Donate</h2>
                  <p className="text-xs text-muted-foreground">Fuel the movement</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Contributions fuel organizing, printing, and outreach. If you can, chip in today.
              </p>

              <div className="space-y-4">
                <div className="glass-subtle rounded-xl p-6 border-glow">
                  <h3 className="font-display text-lg font-semibold mb-2">Make a Contribution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Every dollar helps us reach more voters across District 11A.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://example.com" rel="noopener" className="px-6 py-3 rounded-md text-sm font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2">
                      Donate Online <ArrowRight size={14} />
                    </a>
                    <a href="#contact" className="px-5 py-3 rounded-md text-sm font-medium border border-border hover:bg-secondary/50 transition-colors">
                      Ask a Question
                    </a>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
                    Follow Maryland campaign finance rules for contribution limits, reporting, and disclaimers.
                  </p>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">Host a Meet &amp; Greet</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Want to host a small gathering in District 11A? We'll coordinate everything.
                  </p>
                  <a href="#contact" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1.5">
                    Contact the campaign <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VolunteerDonateSection;
