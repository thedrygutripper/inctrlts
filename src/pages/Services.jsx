export default function Services() {
  return (
    <div style={styles.page}>
      <h1>Our Services</h1>

      <ul>
        <li><strong>CCTV & Security:</strong> Commercial-grade surveillance systems.</li>
        <li><strong>Structured Cabling:</strong> Cat6, fiber, clean rack installs.</li>
        <li><strong>Digital Signage:</strong> Retail, corporate, menu boards.</li>
        <li><strong>Audio Visual:</strong> Conference rooms, displays.</li>
        <li><strong>IT Field Services:</strong> Nationwide technician support.</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    padding: "80px 40px"
  }
};
