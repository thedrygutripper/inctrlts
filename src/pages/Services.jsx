export default function Services() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "80px 10%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>
        Our Services
      </h1>

      {/* Security Systems */}
      <section style={{ marginBottom: "40px" }}>
        <h2>🔒 Security Systems</h2>
        <ul style={{ color: "#ccc", lineHeight: "1.8" }}>
          <li>Commercial & residential CCTV</li>
          <li>IP & cloud-based camera systems</li>
          <li>Access control & monitoring</li>
          <li>System upgrades and expansions</li>
        </ul>
        <p style={{ color: "#aaa" }}>
          Designed for reliability, clarity, and long-term protection.
        </p>
      </section>

      {/* Structured Cabling */}
      <section style={{ marginBottom: "40px" }}>
        <h2>🧵 Structured Cabling</h2>
        <ul style={{ color: "#ccc", lineHeight: "1.8" }}>
          <li>CAT6 / CAT6A / Fiber installs</li>
          <li>Data closets & rack organization</li>
          <li>New construction & retrofits</li>
          <li>Clean, labeled, documented installs</li>
        </ul>
        <p style={{ color: "#aaa" }}>
          A strong infrastructure is the foundation of every modern business.
        </p>
      </section>

      {/* Digital Signage */}
      <section style={{ marginBottom: "40px" }}>
        <h2>📺 Digital Signage</h2>
        <ul style={{ color: "#ccc", lineHeight: "1.8" }}>
          <li>Indoor & outdoor signage</li>
          <li>Menu boards & corporate displays</li>
          <li>Hardware installation & configuration</li>
          <li>Ongoing support & maintenance</li>
        </ul>
        <p style={{ color: "#aaa" }}>
          Engage customers and communicate clearly — at scale.
        </p>
      </section>

      {/* Audio Visual */}
      <section style={{ marginBottom: "40px" }}>
        <h2>🔊 Audio Visual (AV)</h2>
        <ul style={{ color: "#ccc", lineHeight: "1.8" }}>
          <li>Conference rooms & meeting spaces</li>
          <li>Video walls & presentation systems</li>
          <li>Commercial sound systems</li>
          <li>Equipment mounting & calibration</li>
        </ul>
        <p style={{ color: "#aaa" }}>
          Built for clarity, collaboration, and impact.
        </p>
      </section>

      {/* IT Field Services */}
      <section style={{ marginBottom: "40px" }}>
        <h2>🖥️ IT Field Services</h2>
        <ul style={{ color: "#ccc", lineHeight: "1.8" }}>
          <li>On-site technical support</li>
          <li>Hardware deployment & swaps</li>
          <li>Network troubleshooting</li>
          <li>Nationwide field service coordination</li>
        </ul>
        <p style={{ color: "#aaa" }}>
          Your remote hands — professional, fast, dependable.
        </p>
      </section>

      {/* Call To Action */}
      <section
        style={{
          marginTop: "80px",
          paddingTop: "40px",
          borderTop: "1px solid #333",
          textAlign: "center",
        }}
      >
        <h2>Need a custom solution? Let’s talk.</h2>
        <p style={{ marginTop: "20px" }}>📧 info@incontrolts.com</p>
        <p>📞 (407) 683-1398</p>
      </section>
    </div>
  );
}
