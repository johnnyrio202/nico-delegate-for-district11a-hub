const CampaignFooter = () => (
  <footer className="border-t border-border py-6 mt-5">
    <div className="container">
      <div className="flex flex-wrap gap-4 items-start justify-between">
        <div className="text-xs text-muted-foreground leading-relaxed max-w-lg">
          <strong className="text-foreground">Authority line placeholder</strong><br />
          Paid for by Friends of Nico Sanders, [Treasurer Name], Treasurer, [Committee Address].<br />
          This is campaign material for Nico Sanders for Delegate, District 11A.
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Back to top", href: "#top" },
            { label: "Email signup", href: "#updates" },
            { label: "Volunteer", href: "#volunteer" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Replace bracketed fields after your campaign finance entity registration is complete.
      </p>
    </div>
  </footer>
);

export default CampaignFooter;
