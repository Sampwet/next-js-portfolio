export default function GalleryPage() {
  const images = [
    "/images/proj1.png",
    "/images/proj2.png",
    "/images/me.png",
  ]

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Gallery</h1>

      <div style={styles.grid}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            style={styles.image}
          />
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
  image: {
    width: "100%",
    borderRadius: "15px",
  },
}