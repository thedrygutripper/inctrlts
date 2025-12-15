export default function Services() {
  return (
    <div style={{ background: "#0b0b0b", color: "#fff", paddingBottom: "80px" }}>

      {/* HEADER */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Our Professional Services
        </h1>
        <p style={{ color: "#b5b5b5", fontSize: "18px" }}>
          We provide reliable, enterprise-grade technology installations for
          businesses and homes across Central Florida.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <Service
          title="CCTV & Surveillance Systems"
          desc="Design and installation of commercial and residential security camera systems, including remote viewing, recording solutions, and NDAA-compliant hardware."
        />

        <Service
          title="Structured Cabling"
          desc="Professional CAT6, CAT6A, fiber optic, and low-voltage cabling for offices, warehouses, retail, and data environments."
        />

        <Service
          title="Digital Signage Solutions"
          desc="Menu boards, promotional displays, LED signage, and cloud-managed digital signage installations."
        />

        <Service
          title="Audio Visual Integration"
          desc="Conference room AV, presentation systems, speakers, video distribution, and complete audiovisual setups."
        />

        <Service
          title="TV Mounting & Display Installation"
          desc="Clean, secure TV mounting for homes, offices, hotels, medical facilities, and retail locations."
        />

        <Service
          title="IT Field Services"
          desc="On-site IT support, device deployment, troubleshooting, POS installs, and multi-location field service work."
        />
      </section>

      {/* CTA */}
      <section style={{
        marginTop: "80px",
        padding: "60px 20px",
        background: "#000",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Need a Quote or More Information?
        </h2>
        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          Call us or request a quote and our team will respond quickly.
        </p>

        <a href="tel:4076831398" style={button}>
          Call (407) 683-1398
        </a>
      </section>

    </div>
  );
}

function Service({ title, desc }) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid #222",
      borderRadius: "12px",
      padding: "30px",
      marginBottom: "30px"
    }}>
      <h3 style={{ fontSize: "26px", marginBottom: "12px" }}>{title}</h3>
      <p style={{ color: "#aaa", fontSize: "16px", lineHeight: "1.6" }}>{desc}</p>
    </div>
  );
}

const button = {
  background: "#22c55e",
  color: "#000",
  padding: "16px 30px",
  borderRadius: "8px",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "18px"
};
