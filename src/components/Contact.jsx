export default function Contact() {
  return (
    <div style={{ background: "#0b0b0b", color: "#fff", padding: "80px 20px" }}>

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "46px", marginBottom: "20px", textAlign: "center" }}>
          Contact Us
        </h1>

        <p style={{ color: "#aaa", textAlign: "center", marginBottom: "40px" }}>
          Tell us about your project and we’ll get back to you quickly.
        </p>

        <form style={{ display: "grid", gap: "16px" }}>
          <input placeholder="Name" style={input} />
          <input placeholder="Email" style={input} />
          <input placeholder="Phone" style={input} />
          <textarea placeholder="Project Details" rows="5" style={input} />

          <button style={button}>
            Request a Quote
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "30px", color: "#aaa" }}>
          Or call us directly: <br />
          <strong style={{ color: "#22c55e" }}>(407) 683-1398</strong>
        </p>
      </div>

    </div>
  );
}

const input = {
  padding: "14px",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#111",
  color: "#fff",
  fontSize: "16px"
};

const button = {
  background: "#22c55e",
  color: "#000",
  padding: "16px",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer"
};
