"use client";

import React from "react";
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
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
    <section style={{ backgroundColor: "#FAEDCD", color: "#000", minHeight: "100vh", padding: "1em", display: "flex", 
    flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {user ? (
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome</h1>
            <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>Sign Out</button>
            <br />
            <Link href="/main">Go to Main Page</Link>
          </div>
        ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <br />
      <br />
      <br />
      <button onClick={gitHubSignIn} style={{ backgroundColor: "#000", color: "#fff", padding: "10px 20px", borderRadius: "5px", margin: "10px" }}>
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" style={{ width: "20px", marginRight: "10px", display: "inline-block" }} />
  Sign In with GitHub
</button>
    </div>
    
  )}
   </section>
   )};