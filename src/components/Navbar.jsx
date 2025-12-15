import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{
      background: "#000",
      borderBottom: "1px solid #222",
      padding: "16px 24px"
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link to="/" style={{
          color: "#fff",
          fontSize: "22px",
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          InCTRL
        </Link>

        <div style={{ display: "flex", gap: "24px" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        color: "#ccc",
        textDecoration: "none",
        fontSize: "16px"
      }}
    >
      {children}
    </Link>
  );
}
