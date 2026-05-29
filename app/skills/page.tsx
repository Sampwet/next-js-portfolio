export default function SkillsPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "C#",
    "MySQL",
  ]

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Skills</h1>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} style={styles.card}>
            {skill}
          </div>
        ))}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#171717",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center" as const,
    border: "1px solid #222",
  },
}