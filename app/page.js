import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Placeholder until later tbh</h1>
      <h2>Please before continuing into the app</h2>
      <h2>Create an Account or Login</h2>
      <Link href="../login/signup">(for new user)Sign Up</Link>
      <Link href="../login/existlogin">(for existing user)Login</Link>
    </main>
  )
}
