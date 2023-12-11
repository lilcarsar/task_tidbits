"use client";

import React from "react";
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import Heading from "./heading";

export default function Page() {
  const { user, nativeSignUp, firebaseSignOut} = useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp (e) {
    
    e.preventDefault();
    try {
      await nativeSignUp(email, password);
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
            <Heading title="Welcome" />
            
            <br />
            <Link href="/main" style={{ color: "#000", 
            textDecoration: "none", backgroundColor: "#FFF", padding: "10px 20px", justifyContent: "center", 
            borderRadius: "5px", margin: "10px" }} >Go to Main Page</Link>
            <br />
            <br />
            <br />
            <button className="text-lg m-2 hover:underline" onClick={handleSignOut} style={{ color: "#000", 
            textDecoration: "none", backgroundColor: "#FFF", padding: "10px 20px", justifyContent: "center", 
            borderRadius: "5px", margin: "10px" }} >Sign Out</button>
          </div>
        ) : (
    <div>
      <Heading title="Signup" />
      <form onSubmit={handleSignUp}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
</section>
  )};