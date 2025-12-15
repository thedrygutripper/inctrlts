export default function Footer() {
  return (
    <footer style={{
      background: "#000",
      borderTop: "1px solid #222",
      padding: "40px 20px",
      color: "#aaa"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <p style={{ fontWeight: "bold", color: "#fff" }}>
          InCTRL Technology Services
        </p>

        <p style={{ marginTop: "8px" }}>
          Security • Cabling • Digital Signage • AV • IT Field Services
        </p>

        <p style={{ marginTop: "12px" }}>
          📞 (407) 683-1398 • 📧 info@incontrolts.com
        </p>

        <p style={{ marginTop: "20px", fontSize: "13px" }}>
          © {new Date().getFullYear()} InCTRL Technology Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
