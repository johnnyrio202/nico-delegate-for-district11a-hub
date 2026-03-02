import { Home, Heart, GraduationCap, Landmark, Briefcase, TreePine } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const priorities = [
  { icon: Home, title: "Housing & Cost of Living", desc: "Expand affordable housing, protect renters and homeowners from displacement, reduce energy bills and support workforce housing near jobs." },
  { icon: Heart, title: "Mental Health & Safety", desc: "Increase treatment access, strengthen crisis response, and invest in violence prevention strategies." },
  { icon: GraduationCap, title: "Schools & Opportunity", desc: "Back educators, improve supports, and expand career-connected learning and apprenticeships." },
  { icon: Landmark, title: "Good Government", desc: "Cut delays, improve constituent service, and make state resources easier to access." },
  { icon: Briefcase, title: "Small Business & Economy", desc: "Support entrepreneurs with fair procurement, technical assistance, and safer corridors." },
  { icon: TreePine, title: "Environment & Infrastructure", desc: "Prepare for severe weather, invest in stormwater solutions, and protect green spaces." },
];

const PrioritiesSection = () => (
  <section id="priorities" className="py-24 relative">
    <div className="section-divider mb-24" />
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4 block">Platform</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Priorities for{" "}
            <span className="gradient-gold-text">Our Community</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            These are starting points. Detailed plans will come as we meet with residents across District 11A.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {priorities.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <div className="group bg-card rounded-xl p-6 border border-border hover:border-glow hover:glow-amber transition-all duration-500 h-full shadow-sm">
              <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <p.icon size={18} className="text-secondary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PrioritiesSection;
