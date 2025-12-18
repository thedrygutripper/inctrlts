import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Smart Technology.
            <br />
            Secure Infrastructure.
          </h1>
          <p style={styles.heroSubtitle}>
            Security systems, structured cabling, digital signage, AV, and IT
            field services — built for reliability and scale.
          </p>
          <a href="#contact" style={styles.heroButton}>
            Get a Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Security Systems</h3>
            <p>
              Commercial & residential CCTV, IP & cloud cameras, access control,
              monitoring, and system upgrades.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Structured Cabling</h3>
            <p>
              CAT6 / CAT6A / Fiber installs, data closets, racks, new
              construction, and retrofits.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Digital Signage</h3>
            <p>
              Indoor & outdoor signage, menu boards, corporate displays, and
              ongoing support.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Audio Visual</h3>
            <p>
              Conference rooms, video walls, sound systems, equipment mounting,
              and calibration.
            </p>
          </div>

          <div style={styles.card}>
            <h3>IT Field Services</h3>
            <p>
              On-site support, hardware deployment, network troubleshooting, and
              nationwide field service coordination.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ ...styles.section, background: "#0f0f14" }}>
        <h2 style={styles.sectionTitle}>Why InCTRL</h2>

        <div style={styles.grid}>
          <div style={styles.cardAlt}>Enterprise-grade solutions</div>
          <div style={styles.cardAlt}>Clean, documented installs</div>
          <div style={styles.cardAlt}>Fast response & scalability</div>
          <div style={styles.cardAlt}>Trusted technical expertise</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Let’s Talk</h2>
        <p style={styles.contactText}>
          Need a custom solution? Reach out today.
        </p>
        <p style={styles.contactText}>
          📧 info@incontrolts.com
          <br />
          📞 (407) 683-1398
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} InCTRL Technology Solutions. All rights
        reserved.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    background: "#0b0b0f",
    color: "#ffffff",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  hero: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top right, #3b82f6, transparent 40%), radial-gradient(circle at bottom left, #9333ea, transparent 40%)",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
  },

  heroContent: {
    position: "relative",
    maxWidth: "900px",
    padding: "40px",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 800,
    marginBottom: "20px",
  },

  heroSubtitle: {
    fontSize: "1.2rem",
    opacity: 0.85,
    marginBottom: "40px",
  },

  heroButton: {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #3b82f6, #9333ea)",
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
  },

  section: {
    padding: "80px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },

  card: {
    background: "#14141b",
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid #222",
  },

  cardAlt: {
    background: "linear-gradient(135deg, #1f1f2e, #111118)",
    padding: "30px",
    borderRadius: "18px",
    textAlign: "center",
    fontWeight: 600,
  },

  contact: {
    padding: "80px 40px",
    textAlign: "center",
    background: "#0b0b0f",
  },

  contactText: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },

  footer: {
    padding: "30px",
    textAlign: "center",
    fontSize: "0.9rem",
    opacity: 0.6,
  },
};
