// AppContext.js

import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AppContextProvider = ({ children }) => {
  const collectionUsersRef = collection(db, "users");
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null); // Initialize user state to null
  const [userData, setUserData] = useState(null); // Initialize userData state to null
  const navigate = useNavigate();

  // Function to handle sign in with Google
  const signInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;
      const q = query(collectionUsersRef, where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.empty) {
        await addDoc(collectionUsersRef, {
          uid: user?.uid,
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
          authProvider: popup?.providerId,
        });
      }
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  // Function to handle login with email and password
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  // Function to handle registration with email and password
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collectionUsersRef, {
        uid: user.uid,
        name,
        providerId: "email/password",
        email: user.email,
      });
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  // Function to send password reset email
  const sendPasswordToUser = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("New password sent to your email");
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  // Function to sign out user
  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state on sign out
    } catch (err) {
      alert(err.message);
      console.error(err.message);
    }
  };

  // Function to monitor user authentication state
const userStateChanged = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); // Set user state if authenticated
        const q = query(collectionUsersRef, where("uid", "==", user.uid));
        await onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserData(doc.data()); // Set userData state based on document data
          });
        });
      } else {
        setUser(null); // Set user state to null if not authenticated
        setUserData(null); // Clear userData state
      }
    });
  };
  

  useEffect(() => {
    const unsubscribe = userStateChanged(); // Call userStateChanged and capture unsubscribe function
    return () => unsubscribe(); // Return unsubscribe function to cleanup
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const contextValues = {
    signInWithGoogle,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordToUser,
    signOutUser,
    user,
    userData,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
