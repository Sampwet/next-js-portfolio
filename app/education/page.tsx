export default function EducationPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Educational Background</h1>

      <div style={styles.card}>
        <p>High School: Plaridel Integrated National High School</p>
        <p>College: Pamantasan ng Lungsod ng San Pablo</p>
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