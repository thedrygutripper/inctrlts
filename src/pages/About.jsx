export default function About() {
  return (
    <div style={styles.page}>
      <h1>About Us</h1>
      <p>
        InCTRL Technology Services provides professional low-voltage,
        security, and IT installations across Central Florida and beyond.
      </p>
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    padding: "80px 40px"
  }
};
