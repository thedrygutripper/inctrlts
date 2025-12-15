import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div style={styles.box}>
      <h2>Need a professional installation?</h2>
      <p>Serving Central Florida and beyond.</p>
      <Link to="/contact" style={styles.button}>Get a Quote</Link>
    </div>
  );
}

const styles = {
  box: {
    padding: "60px",
    background: "#111",
    textAlign: "center"
  },
  button: {
    marginTop: "20px",
    display: "inline-block",
    padding: "12px 30px",
    background: "#fff",
    color: "#000",
    textDecoration: "none"
  }
};
