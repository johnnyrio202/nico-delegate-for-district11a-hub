import { useState } from "react";
import { toast } from "sonner";
import nicoDailyRecord from "@/assets/nico-daily-record.jpeg";

const AboutSection = () => {
  const [signupDone, setSignupDone] = useState(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupDone(true);
    toast.success("Thank you for signing up!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-start">
          <div className="glass-card rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2.5">About Nico</h2>
            <div className="float-right ml-4 mb-4 hidden sm:block">
              <img
                src={nicoDailyRecord}
                alt="Nico Sanders receiving an award from The Daily Record"
                className="w-48 rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I have worked at the intersection of housing, health, and community safety. I have helped organizations serve people with complex needs,
              and I have partnered with residents, service providers, and public agencies to deliver real outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In Annapolis, I will focus on common-sense legislation that lowers costs, strengthens public safety through prevention and accountability,
              and improves access to care for mental health and substance use.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground leading-relaxed space-y-1 text-sm">
              <li>Show up consistently in District 11A and communicate clearly.</li>
              <li>Protect working families and older adults from rising costs.</li>
              <li>Support effective public safety strategies that prevent harm.</li>
              <li>Strengthen schools and expand career-connected learning.</li>
            </ul>
          </div>

          <div className="glass-card rounded-lg p-6" id="updates">
            <h2 className="text-xl font-bold mb-2">Get campaign updates</h2>
            <p className="text-muted-foreground text-sm mb-4">Sign up for emails about events, priorities, and ways to help.</p>

            <form onSubmit={handleSignup} className="space-y-3">
              <div>
                <label htmlFor="signupName" className="text-xs text-muted-foreground">Name</label>
                <input id="signupName" name="name" autoComplete="name" required
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="signupEmail" className="text-xs text-muted-foreground">Email</label>
                <input id="signupEmail" name="email" type="email" autoComplete="email" required
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-bold gradient-cta transition-all">
                Sign up
              </button>
              {signupDone && <p className="text-xs text-muted-foreground">Thank you! Your signup is recorded.</p>}
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to receive campaign updates. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
