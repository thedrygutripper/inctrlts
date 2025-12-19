export default function Home() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        InCTRL Technology Services
      </h1>

      <p style={styles.subtitle}>
        Security • Cabling • Digital Signage • AV • IT Field Services
      </p>

      <div style={styles.glow} />
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f3d2e, #000)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    padding: "0 20px",
  },
  title: {
    fontSize: "52px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#9ca3af",
    maxWidth: "700px",
  },
  glow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "rgba(31, 214, 122, 0.15)",
    filter: "blur(120px)",
    top: "-150px",
  },
};
