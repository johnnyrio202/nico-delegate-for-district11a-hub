import { useState } from "react";
import { toast } from "sonner";
import nicoDailyRecord from "@/assets/nico-daily-record.jpeg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const [signupDone, setSignupDone] = useState(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupDone(true);
    toast.success("Thank you for signing up!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4 block">About</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Building coalitions that{" "}
              <span className="gradient-gold-text">deliver results</span>
            </h2>

            <div className="flex gap-6 mb-6">
              <div className="hidden sm:block shrink-0">
                <img
                  src={nicoDailyRecord}
                  alt="Nico Sanders receiving an award from The Daily Record"
                  className="w-52 rounded-xl object-cover aspect-[3/4] border border-border"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I have worked at the intersection of housing, health, and community safety. I have helped organizations serve people with complex needs,
                  and I have partnered with residents, service providers, and public agencies to deliver real outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In Annapolis, I will focus on common-sense legislation that lowers costs, strengthens public safety through prevention and accountability,
                  and improves access to care for mental health and substance use.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mt-8">
              {[
                "Show up consistently in District 11A and communicate clearly.",
                "Protect working families and older adults from rising costs.",
                "Support effective public safety strategies that prevent harm.",
                "Strengthen schools and expand career-connected learning.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full gradient-gold mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-xl p-8 glow-amber border border-border shadow-sm" id="updates">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4 block">Stay Connected</span>
              <h3 className="font-display text-2xl font-bold mb-2">Campaign Updates</h3>
              <p className="text-muted-foreground text-sm mb-6">Sign up for emails about events, priorities, and ways to help.</p>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label htmlFor="signupName" className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                  <input id="signupName" name="name" autoComplete="name" required
                    className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                </div>
                <div>
                  <label htmlFor="signupEmail" className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
                  <input id="signupEmail" name="email" type="email" autoComplete="email" required
                    className="w-full mt-1.5 px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg text-sm font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
                  Sign Up for Updates
                </button>
                {signupDone && <p className="text-xs text-primary">✓ Thank you! You're signed up.</p>}
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  By signing up, you agree to receive campaign updates. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
