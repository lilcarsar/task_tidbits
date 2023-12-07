"use client";

import { useState } from "react";
import {useUserAuth} from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, nativeSignIn, firebaseSignOut, nativeSignUp } = useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleGitHubSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSignUp(e) {
    e.preventDefault();
    await nativeSignUp(email, password);
  };

  async function handleNativeSignIn(e) {
    e.preventDefault();
    try {
      await nativeSignIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }
/*
  return (
    <main>
      <header>
        <h1>Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <img src={user.photoURL} className="w-8 h-8" />
            <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSignUp} color="#FFFFFF">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Sign Up</button>
                </form>
            <form onSubmit={handleNativeSignIn}>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>
            <button className="text-lg m-2 hover:underline" onClick={handleGitHubSignIn}>Sign in with GitHub</button>
          </div>
        )}
      </section>
    </main>
  )
}*/
return (
    <main>
      <header>
        <h1>Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div>
           <Link href="../login/signUp">Sign Up</Link>
           <br />
              <Link href="../login/login">Login</Link>
          </div>
        )}
      </section>
    </main>
  )}