import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const SHARE_URL = "https://nicoformddelegate.com";
const SHARE_TEXT = "Support Nico Sanders for Maryland House of Delegates, District 11A — let's raise the bar for our community.";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ShareSection = () => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Could not copy — please copy the URL manually.");
    }
  };

  const copyForInstagram = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      toast.success("Link copied! Paste it in your Instagram bio or story.");
    } catch {
      toast.error("Could not copy — please copy the URL manually.");
    }
  };

  const buttons = [
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
      action: () => window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
        "_blank", "noopener,noreferrer,width=600,height=500"
      ),
    },
    {
      label: "X",
      icon: <XIcon />,
      color: "hover:bg-black hover:text-white hover:border-black",
      action: () => window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`,
        "_blank", "noopener,noreferrer,width=600,height=500"
      ),
    },
    {
      label: "Instagram",
      icon: <InstagramIcon />,
      color: "hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:border-[#fd1d1d]",
      action: copyForInstagram,
    },
    {
      label: copied ? "Copied!" : "Copy Link",
      icon: copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />,
      color: copied ? "bg-green-50 border-green-400 text-green-700" : "hover:bg-secondary hover:border-primary/30",
      action: copyLink,
    },
  ];

  return (
    <section className="py-16">
      <div className="section-divider mb-16" />
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">Spread the Word</p>
            <h2 className="font-display text-3xl font-bold">Share Nico's Campaign</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Every share reaches more neighbors in District 11A. Pick your platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border text-sm font-semibold transition-all duration-150 ${btn.color}`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ShareSection;
