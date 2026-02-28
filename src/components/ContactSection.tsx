import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent! We'll get back to you.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container">
        <ScrollReveal>
          <div className="bg-card rounded-xl p-8 lg:p-12 glow-blue border border-border shadow-sm">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-4 block">Get in Touch</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
                Let's <span className="gradient-blue-text">Connect</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Policy ideas, endorsement requests, media inquiries, or volunteer coordination — we'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={18} className="text-secondary" />
                  <h3 className="font-display text-lg font-semibold">Reach Out</h3>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <a href="mailto:info@yourdomain.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/20 text-sm text-secondary hover:bg-secondary/5 transition-colors">
                    info@yourdomain.com
                  </a>
                  <a href="tel:+10000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/20 text-sm text-secondary hover:bg-secondary/5 transition-colors">
                    (000) 000-0000
                  </a>
                </div>
                <p className="text-muted-foreground text-xs mb-3 uppercase tracking-wider">Social</p>
                <div className="flex flex-wrap gap-2">
                  {["Facebook", "Instagram", "X", "YouTube"].map((s) => (
                    <a key={s} href="https://example.com" rel="noopener"
                      className="text-xs text-muted-foreground border border-border rounded-md px-3 py-2 hover:text-foreground hover:border-primary/20 transition-all">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Send size={18} className="text-secondary" />
                  <h3 className="font-display text-lg font-semibold">Send a Message</h3>
                </div>
                <form onSubmit={handleContact} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cName" className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                      <input id="cName" name="name" autoComplete="name" required
                        className="w-full mt-1.5 px-4 py-2.5 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="cEmail" className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
                      <input id="cEmail" name="email" type="email" autoComplete="email" required
                        className="w-full mt-1.5 px-4 py-2.5 rounded-lg border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cMsg" className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
                    <textarea id="cMsg" name="message" required rows={4}
                      className="w-full mt-1.5 px-4 py-2.5 rounded-lg border border-border bg-background/50 text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg text-sm font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                  {sent && <p className="text-xs text-primary">✓ Thank you! We'll respond soon.</p>}
                </form>
              </div>
            </div>

            <p className="text-[11px] text-muted-foreground text-center mt-8">
              Need content in another format? Email the campaign and we will accommodate.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
