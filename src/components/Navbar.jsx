import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          InCTRL<span style={styles.accent}>TS</span>
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#0b0f0c",
    borderBottom: "1px solid #1f2a24",
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: "1px",
  },
  accent: {
    color: "#39FF14",
    marginLeft: "2px",
  },
  links: {
    display: "flex",
    gap: "28px",
  },
  link: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "15px",
  },
};
