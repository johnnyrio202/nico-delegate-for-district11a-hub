import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import nicoImg from "@/assets/nico-elections.jpeg";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="top">
    {/* Background effects */}
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />

    <div className="container relative z-10 py-20 lg:py-0">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-medium mb-6 border border-primary/20 rounded-full px-4 py-1.5">
              Maryland House of Delegates
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            A people-first
            <br />
            agenda for{" "}
            <span className="gradient-gold-text">
              District&nbsp;11A
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            I've spent my career building housing stability, strengthening mental health supports, and bringing partners together. As your Delegate, I will fight for safer neighborhoods and a government that delivers.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#volunteer" className="px-6 py-3 rounded-md font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm">
              Join the Campaign <ArrowRight size={16} />
            </a>
            <a href="#priorities" className="px-6 py-3 rounded-md font-medium gradient-blue text-secondary-foreground hover:opacity-90 transition-opacity text-sm">
              See Priorities
            </a>
          </motion.div>

          {/* KPI strip */}
          <motion.div
            className="flex gap-8 mt-12 pt-8 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: "Housing", value: "Stability" },
              { label: "Mental Health", value: "Access" },
              { label: "Schools", value: "Opportunity" },
            ].map((k) => (
              <div key={k.label}>
                <span className="text-primary font-display text-lg font-bold">{k.value}</span>
                <span className="block text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{k.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden glow-amber">
            <img
              src={nicoImg}
              alt="Nico Sanders at the Maryland State Board of Elections"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-lg font-semibold">Nico Sanders</p>
              <p className="text-sm text-muted-foreground">Community Leader · Coalition Builder</p>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -left-4 top-8 glass-subtle rounded-lg px-4 py-2.5 border-glow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="text-xs text-primary font-medium uppercase tracking-wider">Data Informed</span>
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-24 glass-subtle rounded-lg px-4 py-2.5 border-glow-blue"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className="text-xs text-secondary font-medium uppercase tracking-wider">Results Driven</span>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Scroll hint */}
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ChevronDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
