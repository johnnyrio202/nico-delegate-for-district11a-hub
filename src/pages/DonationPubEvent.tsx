import nicoImg from "@/assets/nico-pug-event.jpeg";
import turboImg from "@/assets/turbo-dillard.jpeg";
import qrCodeImg from "@/assets/qrcode-actblue.png";

const ACTBLUE_URL = "https://secure.actblue.com/donate/nico-sanders-1";

const DonationPubEvent = () => (
  <div style={{ background: "#FAF8F2", color: "#1a2a50", fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif", minHeight: "100vh" }}>

    {/* ── Top bar ────────────────────────────────────────── */}
    <div style={{ borderBottom: "1px solid #E5E0D8", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAF8F2" }}>
      <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#E8960A" }}>
        ◆ A Fundraiser for Nico Sanders
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "22px", height: "22px", background: "#1a2a50", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: "11px", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>N</span>
        </div>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#1a2a50" }}>
          Tuesday · June 2 · 2026
        </span>
      </div>
    </div>

    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 28px" }}>

      {/* ── Headline ───────────────────────────────────────── */}
      <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 900, lineHeight: 1, color: "#1a2a50", marginBottom: "16px", letterSpacing: "-1px" }}>
        Raising the Bar for{" "}
        <em style={{ color: "#E8960A", fontStyle: "italic" }}>District 11A</em>
      </h1>

      <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#2a3a60", marginBottom: "32px", maxWidth: "640px" }}>
        <strong>Nico Sanders steps behind the bar</strong> for one night only — and{" "}
        <strong>every tip goes straight to the campaign</strong>. Free to walk in, easy to give:
        order a drink from the candidate himself and support Nico for Maryland House of Delegates, District 11A.
      </p>

      {/* ── Photos ─────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>

        {/* Turbo */}
        <div style={{ border: "2px solid #1a2a50", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: "12px", right: 0, background: "#1a2a50", color: "white", fontSize: "9px", fontWeight: 800, letterSpacing: "0.2em", padding: "5px 12px", textTransform: "uppercase" as const }}>
            HOST
          </div>
          <img src={turboImg} alt='Dwight "Turbo" Dillard' style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div style={{ padding: "18px 22px", background: "white" }}>
            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#E8960A", marginBottom: "5px" }}>Hosted by</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#1a2a50", lineHeight: 1.15, marginBottom: "4px" }}>
              Dwight "Turbo" Dillard
            </p>
            <p style={{ fontSize: "12px", color: "#7a8aaa" }}>CEO of The Final Boss Podcast</p>
          </div>
        </div>

        {/* Nico */}
        <div style={{ border: "2px solid #1a2a50", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: "12px", right: 0, background: "#E8960A", color: "white", fontSize: "9px", fontWeight: 800, letterSpacing: "0.2em", padding: "5px 12px", textTransform: "uppercase" as const }}>
            Behind the Bar
          </div>
          <img src={nicoImg} alt="Nico Sanders" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div style={{ padding: "18px 22px", background: "white" }}>
            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#E8960A", marginBottom: "5px" }}>Your Bartender</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#1a2a50", lineHeight: 1.15, marginBottom: "4px" }}>
              Nico Sanders
            </p>
            <p style={{ fontSize: "12px", color: "#7a8aaa" }}>Candidate · MD House of Delegates</p>
          </div>
        </div>
      </div>

      {/* ── Event details ──────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
        {[
          { label: "Date",  value: "Tuesday, June 2", sub: "2026" },
          { label: "Time",  value: "7:30 PM",          sub: "Doors open · come early" },
          { label: "Venue", value: "The Pug",           sub: "1234 H St NE, Washington, DC 20002" },
        ].map(({ label, value, sub }) => (
          <div key={label} style={{ border: "1px solid #E5E0D8", borderRadius: "8px", padding: "18px 20px" }}>
            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#E8960A", marginBottom: "6px" }}>{label}</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "19px", fontWeight: 700, color: "#1a2a50", lineHeight: 1.2 }}>{value}</p>
            <p style={{ fontSize: "11px", marginTop: "4px", color: "#7a8aaa" }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Amber CTA block ────────────────────────────────── */}
      <div style={{ background: "#F5A30A", borderRadius: "10px", padding: "32px 36px", marginBottom: "32px" }}>
        <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.5)", marginBottom: "8px" }}>
          The Tip Jar is the Campaign
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 900, color: "#1a2a50", lineHeight: 1.1, marginBottom: "14px" }}>
          Tip the Bartender,<br />Fund the Race.
        </h2>
        <p style={{ fontSize: "13px", color: "#1a2a50", lineHeight: 1.65, marginBottom: "20px", maxWidth: "500px" }}>
          100% of tips Nico earns behind the bar go directly to Friends of Nico Sanders.
          Tip in cash on the night — it all counts.
        </p>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" as const, marginBottom: "24px" }}>
          <span style={{ background: "#1a2a50", color: "white", fontSize: "10px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" as const, padding: "6px 14px", borderRadius: "4px" }}>
            Free to Attend
          </span>
          <span style={{ fontSize: "12px", color: "#1a2a50" }}>No ticket, no cover — just come, grab a drink, and pitch in.</span>
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" as const }}>
          <div>
            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.45)", marginBottom: "4px" }}>
              Learn more &amp; get involved
            </p>
            <a href="https://nicoformdelegate.com" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 900, color: "#1a2a50", textDecoration: "none" }}>
              nicoformdelegate.com
            </a>
          </div>
          {/* QR code — mirrors flyer layout */}
          <div style={{ textAlign: "center" as const }}>
            <p style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.45)", marginBottom: "8px" }}>
              Can't make it? Tip from home
            </p>
            <a href={ACTBLUE_URL} target="_blank" rel="noopener noreferrer">
              <img src={qrCodeImg} alt="Scan to give via ActBlue" style={{ width: "120px", height: "120px", display: "block", borderRadius: "6px", background: "white", padding: "6px" }} />
            </a>
            <p style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)", marginTop: "6px", maxWidth: "120px", lineHeight: 1.4 }}>
              Scan to give via ActBlue
            </p>
          </div>
        </div>
      </div>

      {/* ── Back link ──────────────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <a href="/" style={{ fontSize: "13px", color: "#7a8aaa", textDecoration: "underline" }}>← Back to nicoformdelegate.com</a>
      </div>
    </div>

    {/* ── Disclosure ─────────────────────────────────────── */}
    <div style={{ borderTop: "1px solid #E5E0D8", background: "#F0EDE6", padding: "14px 32px", textAlign: "center" }}>
      <p style={{ fontSize: "10px", color: "#9a9a9a", lineHeight: 1.6 }}>
        Paid for by the authority of Friends of Nico Sanders, Lara Figures, Treasurer, P.O. Box 1060, Owings Mills, MD 21117.
      </p>
    </div>

  </div>
);

export default DonationPubEvent;
