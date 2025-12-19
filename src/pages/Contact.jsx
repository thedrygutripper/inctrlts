export default function Contact() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>

      <p style={styles.text}>
        Need a custom solution? Let’s talk.
      </p>

      <div style={styles.info}>
        <p>📧 info@incontrolts.com</p>
        <p>📞 (407) 683-1398</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: "120px 24px",
    textAlign: "center",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  text: {
    color: "#9ca3af",
    marginBottom: "30px",
  },
  info: {
    fontSize: "18px",
    lineHeight: "2",
    color: "#1fd67a",
  },
};
