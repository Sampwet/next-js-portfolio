"use client"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/images/proj1.png",
    },
    {
      title: "Student Information System",
      image: "/images/proj2.png",
    },
  ]

  const openImage = (image: string) => {
    window.open(image, "_blank")
  }

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Projects</h1>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
              onClick={() => openImage(project.image)}
            />

            <h2>{project.title}</h2>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#171717",
    padding: "20px",
    borderRadius: "15px",
    border: "1px solid #222",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover" as const,
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "15px",
  },
}