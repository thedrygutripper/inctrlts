export default function Home() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#ffffff" }}>

      {/* HERO */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h1 style={{ fontSize: "56px", maxWidth: "900px" }}>
          Professional Security & Technology Installations
        </h1>

        <p style={{
          color: "#b5b5b5",
          fontSize: "20px",
          maxWidth: "700px",
          marginTop: "20px"
        }}>
          CCTV, Structured Cabling, Digital Signage, AV & IT Field Services
          for businesses and homes across Central Florida.
        </p>

        <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
          <a href="/contact" style={buttonPrimary}>Get a Free Quote</a>
          <a href="tel:4076831398" style={buttonSecondary}>
            Call (407) 683-1398
          </a>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "50px" }}>
          Our Core Services
        </h2>

        <div style={grid}>
          <Service title="CCTV & Surveillance"
            desc="Commercial & residential camera systems with remote monitoring." />
          <Service title="Structured Cabling"
            desc="CAT6, CAT6A, fiber, server rooms & low-voltage infrastructure." />
          <Service title="Digital Signage"
            desc="Menu boards, retail displays, LED & networked signage." />
          <Service title="Audio Visual"
            desc="Conference rooms, speakers, video distribution & AV systems." />
          <Service title="TV Mounting"
            desc="Professional mounting for offices, homes & hospitality." />
          <Service title="IT Field Services"
            desc="On-site installs, troubleshooting & multi-location support." />
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 20px",
        background: "#000",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "34px" }}>
          Ready to Get Your Project Done Right?
        </h2>

        <p style={{ color: "#aaa", marginTop: "15px", fontSize: "18px" }}>
          Fast response • Professional installs • Trusted technicians
        </p>

        <a href="/contact" style={{ ...buttonPrimary, marginTop: "30px", display: "inline-block" }}>
          Request a Quote
        </a>
      </section>

    </div>
  );
}

/* COMPONENTS */
function Service({ title, desc }) {
  return (
    <div style={card}>
      <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{title}</h3>
      <p style={{ color: "#aaa", fontSize: "15px" }}>{desc}</p>
    </div>
  );
}

/* STYLES */
const buttonPrimary = {
  background: "#22c55e",
  color: "#000",
  padding: "16px 28px",
  borderRadius: "8px",
  fontWeight: "bold",
  textDecoration: "none"
};

const buttonSecondary = {
  background: "#fff",
  color: "#000",
  padding: "16px 28px",
  borderRadius: "8px",
  fontWeight: "bold",
  textDecoration: "none"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px"
};

const card = {
  background: "#111",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #222"
};
