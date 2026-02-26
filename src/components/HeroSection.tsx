import nicoImg from "@/assets/nico-elections.jpeg";

const kpis = [
  { title: "Housing & cost of living", desc: "Support policies that keep families stable and communities strong." },
  { title: "Mental health & public safety", desc: "Invest in prevention, treatment, and smart accountability." },
  { title: "Schools & youth opportunity", desc: "Back educators and expand pathways to jobs and careers." },
  { title: "Responsive constituent service", desc: "Clear communication, fast follow-up, and real results." },
];

const HeroSection = () => (
  <section className="pt-12 pb-6" id="top">
    <div className="container">
      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-4 items-stretch">
        {/* Main panel */}
        <div className="glass-card rounded-lg p-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] font-bold leading-[1.05] tracking-tight mb-3">
            A practical, people-first agenda for District&nbsp;11A.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[62ch] mb-5">
            I am Nico Sanders. I have spent my career building housing stability, strengthening mental health supports, and bringing partners together to solve hard problems.
            As your Delegate, I will fight for safer neighborhoods, affordable living, and a government that shows up and delivers.
          </p>

          <div className="flex flex-wrap gap-2.5">
            <a href="#volunteer" className="px-4 py-2.5 rounded-full text-sm font-semibold gradient-cta transition-all">Volunteer</a>
            <a href="#donate" className="px-4 py-2.5 rounded-full text-sm font-semibold border border-border hover:bg-muted/50 transition-colors">Donate</a>
            <a href="#updates" className="px-3 py-2 rounded-full text-sm text-muted-foreground border border-border hover:text-foreground transition-colors">Get campaign updates</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
            {kpis.map((k) => (
              <div key={k.title} className="rounded-2xl border border-border bg-background/40 p-3.5">
                <strong className="text-sm block">{k.title}</strong>
                <span className="text-xs text-muted-foreground mt-1 block leading-snug">{k.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-3">
          <div className="glass-card rounded-lg p-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-sm font-semibold mb-2">Meet Nico</h3>
            <div className="rounded-lg overflow-hidden mb-3">
              <img src={nicoImg} alt="Nico Sanders at the Maryland State Board of Elections" className="w-full h-48 object-cover object-top" />
            </div>
            <p className="text-muted-foreground text-[13px] leading-relaxed">
              A nonprofit executive and community leader focused on housing stability, mental health supports, and accountable systems.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Community centered", "Data informed", "Results driven", "Coalition builder"].map((b) => (
                <span key={b} className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1.5">{b}</span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-lg p-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-sm font-semibold mb-2">Quick actions</h3>
            <p className="text-muted-foreground text-[13px]">Pick one step today. Ten minutes helps.</p>
            <div className="flex gap-2 mt-3">
              <a href="#volunteer" className="px-3.5 py-2 rounded-full text-sm font-semibold gradient-cta">Volunteer now</a>
              <a href="#donate" className="px-3.5 py-2 rounded-full text-sm font-semibold border border-border hover:bg-muted/50 transition-colors">Donate</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;
