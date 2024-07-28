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
  getDoc,
  setDoc,
  doc,
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

  const initializeUserDocument = async (user) => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.email); // Ensure the path is correct
        const userDocSnap = await getDoc(userRef);
        
        if (!userDocSnap.exists()) {
          // Create the document if it doesn't exist
          await setDoc(userRef, {
            uid: user.uid,
            name: user.displayName || "Anonymous",
            email: user.email,
            providerId: user.providerId,
            likedPets: [],
            likedVolunteer: []
          });
        }
      } catch (error) {
        console.error("Error initializing user document:", error);
      }
    }
  };

  // Function to handle sign in with Google
  const signInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;

      // Initialize or update user document
      await initializeUserDocument(user);
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
              
      // Initialize or update user document
      await initializeUserDocument(user);
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
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); // Set user state if authenticated

        // Initialize or update user document
        await initializeUserDocument(user);

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

  const savePet = async (pet) => {
    if (user?.email) {
      try {
        const userRef = doc(db, "users", user.email);
        await updateDoc(userRef, {
          savedPets: arrayUnion(pet),
        });
      } catch (error) {
        console.error("Error saving pet:", error);
      }
    } else {
      alert("Please log in to save a pet");
    }
  };

  const getSavedPets = async () => {
    if (user?.email) {
      const userRef = doc(db, "users", user.email);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()); // Check data
        return docSnap.data().likedPets || [];
      } else {
        console.log("No document found for user email:", user.email); // Debugging line
        return [];
      }
    } else {
      console.log("User email not available"); // Debugging line
      return [];
    }
  };

const getSavedVolunteers = async () => {
  if (!user?.email) return [];
  const userDocRef = doc(db, 'users', `${user.email}`);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data()?.likedVolunteer || [];
};  

  const contextValues = {
    signInWithGoogle,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordToUser,
    signOutUser,
    user,
    userData,
    savePet,
    getSavedPets,
    getSavedVolunteers,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
