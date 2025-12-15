import CTA from "../components/CTA";

export default function Home() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1>InCTRL Technology Services</h1>
        <p>Security • Cabling • Digital Signage • AV • IT Field Services</p>
      </section>

      <section style={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li>CCTV & Security Systems</li>
          <li>Structured Cabling</li>
          <li>Digital Signage & TV Installation</li>
          <li>Audio Visual Solutions</li>
          <li>IT Field Engineering</li>
        </ul>
      </section>

      <CTA />
    </div>
  );
}

const styles = {
  page: { background: "#000", color: "#fff" },
  hero: {
    padding: "120px 40px",
    textAlign: "center"
  },
  section: {
    padding: "60px 40px",
    color: "#ccc"
  }
};
