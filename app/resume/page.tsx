export default function ResumePage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Resume</h1>

      <div style={styles.card}>
        <p>Name: Sam Urizza</p>
        <p>Email: samurriza322@gmail.com</p>
        <p>Phone: 09994883171</p>
      </div>
    </main>
  )
}

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    color: "white",
    padding: "60px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "50px",
    marginBottom: "40px",
  },
  card: {
    backgroundColor: "#171717",
    padding: "30px",
    borderRadius: "15px",
    lineHeight: "40px",
    color: "#aaa",
  },
}