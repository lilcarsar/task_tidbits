"use client";

import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function page() {
  const { user, gitHubSignIn, nativeSignIn, firebaseSignOut } = useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      await nativeSignIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>Sign Out</button>
            <br />
            <Link href="/main">Go to Main Page</Link>
          </div>
        ) : (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={gitHubSignIn}>Sign In with GitHub</button>
    </div>
    
  )}
   </section>
   )};