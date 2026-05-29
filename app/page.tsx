"use client"

export default function MainPage() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <img
          src="/images/me.png"
          alt="Profile"
          style={styles.image}
        />

        <h1 style={styles.title}>
          Hi, I'm Sam Urriza
        </h1>

        <p style={styles.subtitle}>
          BSIT Student • Web Developer • Gamer
        </p>

        <p style={styles.description}>
          I am a passionate BS Information Technology
          student who enjoys building websites,
          learning modern technologies, and improving
          my programming skills. I love creating
          clean and responsive web applications while
          continuously exploring new ideas in tech.
        </p>
      </section>
    </main>
  )
}

const styles = {
  main: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, #0f0f0f, #151515)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "Arial",
  },

hero: {
  width: "100%",
  maxWidth: "900px",
  textAlign: "center" as const,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
},

image : {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  border: "4px solid #222",
  marginBottom: "30px",
  boxShadow: "0 0 30px rgba(255,255,255,0.08)",
},

  title: {
    fontSize: "64px",
    marginBottom: "15px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#999",
    fontSize: "22px",
    marginBottom: "30px",
  },

  description: {
    color: "#bbb",
    fontSize: "18px",
    lineHeight: "35px",
    maxWidth: "700px",
    margin: "0 auto",
  },
}