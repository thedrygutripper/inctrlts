export default function Services() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: "Security Systems",
    text: "Commercial & residential CCTV, IP & cloud-based systems, access control, monitoring, and upgrades.",
  },
  {
    title: "Structured Cabling",
    text: "CAT6 / CAT6A / Fiber installs, data closets, racks, labeling, and documentation.",
  },
  {
    title: "Digital Signage",
    text: "Indoor & outdoor signage, menu boards, corporate displays, installation & maintenance.",
  },
  {
    title: "Audio Visual (AV)",
    text: "Conference rooms, video walls, sound systems, mounting, and calibration.",
  },
  {
    title: "IT Field Services",
    text: "On-site support, hardware deployment, troubleshooting, nationwide field coordination.",
  },
];

const styles = {
  section: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: "120px 24px",
  },
  heading: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "60px",
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#0b0f0c",
    border: "1px solid #1f2a24",
    borderRadius: "12px",
    padding: "24px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#1fd67a",
  },
  cardText: {
    color: "#9ca3af",
    lineHeight: "1.6",
  },
};
