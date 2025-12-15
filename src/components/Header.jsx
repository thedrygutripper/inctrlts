import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      background: "#000",
      borderBottom: "1px solid #222",
      padding: "20px 40px",
      zIndex: 1000
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff"
      }}>
        <strong style={{ fontSize: "20px" }}>InCTRL</strong>

        <div style={{ display: "flex", gap: "30px" }}>
          <Link to="/" style={{ color: "#aaa", textDecoration: "none" }}>Home</Link>
          <Link to="/services" style={{ color: "#aaa", textDecoration: "none" }}>Services</Link>
        </div>
      </nav>
    </header>
  );
}
