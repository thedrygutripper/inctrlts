export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} InCTRL Technology Services</p>
      <p>📞 407-683-1398 | ✉ info@incontrolts.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px",
    background: "#000",
    color: "#777",
    textAlign: "center",
    borderTop: "1px solid #222"
  }
};
