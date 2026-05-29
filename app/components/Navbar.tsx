"use client"

import Link from "next/link"

export default function Navbar() {
  const links = [
    "about",
    "skills",
    "projects",
    "hobbies",
    "education",
    "awards",
    "resume",
    "contact",
    "gallery",
  ]

  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>
        Portfolio
      </Link>

      <div style={styles.links}>
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link}`}
            style={styles.link}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#111",
    borderBottom: "1px solid #222",
    backdropFilter: "blur(10px)",
  },

  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
  },

  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.3s",
  },
}