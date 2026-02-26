import { useState } from "react";
import { toast } from "sonner";

const VolunteerDonateSection = () => {
  const [volDone, setVolDone] = useState(false);

  const handleVolunteer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolDone(true);
    toast.success("Thank you for volunteering!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="volunteer" className="py-5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Volunteer */}
          <div className="glass-card rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Volunteer</h2>
            <p className="text-muted-foreground text-sm mb-4">
              People win campaigns. If you can spare an hour, you can help. Tell us how you want to plug in.
            </p>
            <form onSubmit={handleVolunteer} className="space-y-3">
              <div>
                <label htmlFor="vName" className="text-xs text-muted-foreground">Name</label>
                <input id="vName" name="name" autoComplete="name" required
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="vEmail" className="text-xs text-muted-foreground">Email</label>
                <input id="vEmail" name="email" type="email" autoComplete="email" required
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="vPhone" className="text-xs text-muted-foreground">Phone</label>
                <input id="vPhone" name="phone" autoComplete="tel"
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="vHelp" className="text-xs text-muted-foreground">How do you want to help?</label>
                <textarea id="vHelp" name="help" placeholder="Examples: canvassing, phones, hosting, data, social media" rows={4}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-bold gradient-cta transition-all">Send</button>
              {volDone && <p className="text-xs text-muted-foreground">Thank you! We'll be in touch.</p>}
            </form>
          </div>

          {/* Donate */}
          <div className="glass-card rounded-lg p-6" id="donate">
            <h2 className="text-xl font-bold mb-2">Donate</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Contributions fuel organizing, printing, and outreach. If you can, chip in today.
            </p>

            <div className="rounded-lg border border-border p-4 mb-3">
              <h3 className="text-sm font-semibold mb-2">Donation link</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed mb-3">
                Replace the button below with your official contribution page once your campaign finance entity is set up.
              </p>
              <div className="flex gap-2">
                <a href="https://example.com" rel="noopener" className="px-4 py-2 rounded-full text-sm font-semibold gradient-cta">Donate online</a>
                <a href="#contact" className="px-4 py-2 rounded-full text-sm font-semibold border border-border hover:bg-muted/50 transition-colors">Ask a question</a>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Important: Follow Maryland campaign finance rules for contribution limits, reporting, and required disclaimers.
              </p>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="text-sm font-semibold mb-2">Volunteer host option</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed mb-3">
                Want to host a small meet-and-greet in District 11A? Send a note and we will follow up with next steps.
              </p>
              <a href="#contact" className="inline-block px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-border hover:text-foreground transition-colors">Contact the campaign</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerDonateSection;
