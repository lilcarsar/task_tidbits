import Link from "next/link";
import Heading from "./heading";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FAEDCD", color: "#000", minHeight: "100vh",
     padding: "1em", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Heading title="Welcome to TaskTidbits" />
      <h2>Create an Account or Login</h2>
      <Link href="../login/signup" style={{ color: "#000", textDecoration: "none", 
      backgroundColor: "#FFF", padding: "10px 20px", 
      borderRadius: "5px", margin: "10px" }}>
        Sign Up
      </Link>
      <Link href="../login/existlogin" style={{ color: "#000", textDecoration: "none", 
      backgroundColor: "#FFF", padding: "10px 20px", borderRadius: "5px", margin: "10px" }}>
        Login
      </Link>
    </main>
  )
}