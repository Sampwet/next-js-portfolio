export default function AwardsPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Achievements & Awards</h1>

      <div style={styles.card}>
        <ul style={styles.list}>
          <li>Dean's Lister</li>
          <li>Best in Programming</li>
          <li>Completed Web Development Projects</li>
        </ul>
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
  },
  list: {
    lineHeight: "50px",
    color: "#aaa",
    fontSize: "18px",
  },
}