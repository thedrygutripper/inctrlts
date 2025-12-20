export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.glow} />

        <div style={styles.content}>
          <h1 style={styles.title}>
            InCTRL <span style={styles.accent}>Technology Services</span>
          </h1>

          <p style={styles.subtitle}>
            Security • Cabling • Digital Signage • AV • IT Field Services
          </p>

          <p style={styles.description}>
            Professional technology solutions for businesses that demand
            reliability, clarity, and control.
          </p>

          <div style={styles.actions}>
            <a href="/services" style={styles.primaryBtn}>
              View Services
            </a>
            <a href="/contact" style={styles.secondaryBtn}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "-80px", // pulls the hero up under the navbar
  },
  hero: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #112117 0%, #0b0f0c 65%)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    padding: "0 24px",
    paddingTop: "120px", // ensures content doesn’t cut into navbar area
  },
  glow: {
    position: "absolute",
    top: "-200px",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, #39FF14 0%, transparent 70%)",
    opacity: 0.12,
    filter: "blur(120px)",
  },
  content: {
    maxWidth: "900px",
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: "56px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.1",
  },
  accent: {
    color: "#39FF14",
  },
  subtitle: {
    fontSize: "18px",
    color: "#9ca3af",
    marginBottom: "30px",
  },
  description: {
    fontSize: "20px",
    color: "#d1d5db",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.6",
  },
  actions: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "14px 28px",
    backgroundColor: "#39FF14",
    color: "#0b0f0c",
    textDecoration: "none",
    fontWeight: "700",
    borderRadius: "6px",
    transition: "transform 0.2s ease",
  },
  secondaryBtn: {
    padding: "14px 28px",
    border: "1px solid #39FF14",
    color: "#39FF14",
    textDecoration: "none",
    fontWeight: "600",
    borderRadius: "6px",
  },
};
