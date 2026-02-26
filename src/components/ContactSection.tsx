import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent! We'll get back to you.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="glass-card rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Reach out for policy ideas, endorsement requests, media inquiries, or volunteer coordination.
          </p>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border p-4">
              <h3 className="text-sm font-semibold mb-2">Email</h3>
              <a href="mailto:info@yourdomain.com" className="inline-block px-3 py-1.5 rounded-full text-sm text-muted-foreground border border-border hover:text-foreground transition-colors">
                info@yourdomain.com
              </a>
              <p className="text-muted-foreground text-xs mt-4 mb-2">Social links:</p>
              <div className="flex flex-wrap gap-2">
                {["Facebook", "Instagram", "X", "YouTube"].map((s) => (
                  <a key={s} href="https://example.com" rel="noopener"
                    className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1.5 hover:text-foreground transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h3 className="text-sm font-semibold mb-2">Send a message</h3>
              <form onSubmit={handleContact} className="space-y-3">
                <div>
                  <label htmlFor="cName" className="text-xs text-muted-foreground">Name</label>
                  <input id="cName" name="name" autoComplete="name" required
                    className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="cEmail" className="text-xs text-muted-foreground">Email</label>
                  <input id="cEmail" name="email" type="email" autoComplete="email" required
                    className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="cMsg" className="text-xs text-muted-foreground">Message</label>
                  <textarea id="cMsg" name="message" required rows={4}
                    className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background/40 text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-bold gradient-cta transition-all">Send</button>
                {sent && <p className="text-xs text-muted-foreground">Thank you! We'll get back to you.</p>}
              </form>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Accessibility note: If you need content in another format, email the campaign and we will accommodate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
