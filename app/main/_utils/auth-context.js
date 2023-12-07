"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import { auth} from "./firebase";
import { getAuth, signInWithPopup, GithubAuthProvider, 
    signInWithEmailAndPassword, createUserWithEmailAndPassword, 
    signOut, onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const nativeSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const nativeSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, nativeSignIn, nativeSignUp, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useUserAuth = () => {
    return useContext(AuthContext);
  };
