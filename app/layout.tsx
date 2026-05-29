import "./globals.css"
import Navbar from "./components/Navbar"

export const metadata = {
  title: "Portfolio Website",
  description: "My Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0f0f0f",
        }}
      >
        <Navbar />

        {children}
      </body>
    </html>
  )
}