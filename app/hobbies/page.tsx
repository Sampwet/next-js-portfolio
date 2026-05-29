export default function HobbiesPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Hobbies</h1>

      <ul style={styles.list}>
        <li>Gaming</li>
        <li>Programming</li>
        <li>Motorcycle Riding</li>
        <li>Watching Tech Videos</li>
      </ul>
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
  },
  list: {
    marginTop: "30px",
    lineHeight: "50px",
    color: "#aaa",
    fontSize: "20px",
  },
}