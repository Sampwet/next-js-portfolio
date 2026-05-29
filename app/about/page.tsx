export default function AboutPage() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <img
          src="/images/me.png"
          alt="Me"
          style={styles.image}
        />

        <h1 style={styles.title}>About Me</h1>

        <p style={styles.text}>
          I am a BSIT student who enjoys creating
          websites and learning programming.
        </p>

        <div style={styles.info}>
          <p>Email: samurriza322@gmail.com</p>
          <p>Phone: 09123456789</p>
          <p>Address: San Pablo City, Laguna</p>
        </div>
      </div>
    </main>
  )
}

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "Arial",
  },

  container: {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
  },

  image: {
    width: "180px",
    height: "180px",
    borderRadius: "20px",
    objectFit: "cover" as const,
    marginBottom: "30px",
    border: "3px solid #222",
    boxShadow: "0 0 25px rgba(255,255,255,0.08)",
  },

  title: {
    fontSize: "60px",
    marginBottom: "20px",
  },

  text: {
    color: "#aaa",
    fontSize: "18px",
    lineHeight: "35px",
    maxWidth: "700px",
  },

  info: {
    marginTop: "40px",
    lineHeight: "40px",
    color: "#ccc",
    fontSize: "18px",
  },
}