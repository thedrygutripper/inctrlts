import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* -----------------------------
   Brand Color System (LOCKED)
------------------------------ */
const colors = {
  primary: "#7BC62D",   // Brand green
  secondary: "#1F8A3A", // Dark green
  dark: "#0E0E0E",      // Background
  gray: "#8A8A8A",      // Text
  white: "#FFFFFF",
};

/* -----------------------------
   Layout Components
------------------------------ */

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: colors.dark,
      borderBottom: `1px solid ${colors.secondary}`
    }}>
      <h2 style={{ color: colors.primary, margin: 0 }}>
        InCTRL
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/" label="Home" />
        <NavLink to="/services" label="Services" />
        <NavLink to="/contact" label="Contact" />
      </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      style={{
        color: colors.white,
        textDecoration: "none",
        fontSize: "14px",
        letterSpacing: "1px"
      }}
    >
      {label.toUpperCase()}
    </Link>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "40px",
      marginTop: "80px",
      borderTop: `1px solid ${colors.secondary}`,
      color: colors.gray,
      textAlign: "center"
    }}>
      <p style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} InCTRL Technology Services
      </p>
      <p style={{ fontSize: "14px" }}>
        info@incontrolts.com • (407) 683-1398
      </p>
    </footer>
  );
}

/* -----------------------------
   Pages
------------------------------ */

function Home() {
  return (
    <section style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 40px"
    }}>
      <h1 style={{
        fontSize: "56px",
        color: colors.white,
        marginBottom: "20px"
      }}>
        InCTRL Technology Services
      </h1>

      <p style={{
        color: colors.gray,
        fontSize: "20px",
        maxWidth: "700px",
        lineHeight: 1.6
      }}>
        Security • Cabling • Digital Signage • AV • IT Field Services
      </p>

      <Link
        to="/services"
        style={{
          marginTop: "40px",
          width: "fit-content",
          padding: "14px 32px",
          background: colors.primary,
          color: colors.dark,
          textDecoration: "none",
          fontWeight: "600",
          letterSpacing: "1px",
          borderRadius: "4px"
        }}
      >
        VIEW SERVICES
      </Link>
    </section>
  );
}

function Services() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <h2 style={{ color: colors.primary, marginBottom: "30px" }}>
        Our Services
      </h2>

      <ul style={{
        color: colors.gray,
        fontSize: "18px",
        lineHeight: 1.8,
        maxWidth: "800px"
      }}>
        <li>Commercial & Residential Security Systems</li>
        <li>Structured Cabling (CAT6 / Fiber)</li>
        <li>Digital Signage & Displays</li>
        <li>Audio Visual & Conference Rooms</li>
        <li>Nationwide IT Field Services</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ padding: "80px 40px" }}>
      <h2 style={{ color: colors.primary, marginBottom: "20px" }}>
        Contact Us
      </h2>

      <p style={{ color: colors.gray, fontSize: "18px" }}>
        Need a custom solution? Let’s talk.
      </p>

      <p style={{ color: colors.white, marginTop: "20px" }}>
        📧 info@incontrolts.com <br />
        📞 (407) 683-1398
      </p>
    </section>
  );
}

/* -----------------------------
   App Root
------------------------------ */

export default function App() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: "100vh",
        background: colors.dark,
        fontFamily: "Arial, sans-serif"
      }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
