import { Home, Heart, GraduationCap, Landmark, Briefcase, TreePine } from "lucide-react";

const priorities = [
  { icon: Home, title: "Cost of living & housing stability", desc: "Expand access to affordable housing, protect renters and homeowners from avoidable displacement, and support workforce housing near jobs." },
  { icon: Heart, title: "Mental health, substance use & community safety", desc: "Increase access to treatment, strengthen crisis response partnerships, and invest in strategies that prevent violence." },
  { icon: GraduationCap, title: "Schools & opportunity", desc: "Back educators, improve student supports, and expand career-connected learning and apprenticeships." },
  { icon: Landmark, title: "Good government that delivers", desc: "Cut delays, improve constituent service, and make state resources easier to access." },
  { icon: Briefcase, title: "Small business & local economy", desc: "Support local entrepreneurs with fair procurement, technical assistance, and safer commercial corridors." },
  { icon: TreePine, title: "Environment & resilient infrastructure", desc: "Prepare for severe weather, invest in stormwater solutions, and protect green spaces." },
];

const PrioritiesSection = () => (
  <section id="priorities" className="py-5">
    <div className="container">
      <h2 className="text-xl font-bold mb-2">Priorities</h2>
      <p className="text-muted-foreground leading-relaxed mb-5 max-w-[78ch]">
        These are starting points. The campaign will publish more detailed plans as we meet with residents across District 11A.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {priorities.map((p) => (
          <div key={p.title} className="glass-card rounded-lg p-4 group hover:border-primary/30 transition-colors">
            <p.icon size={20} className="text-primary mb-2.5 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-[13px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrioritiesSection;
