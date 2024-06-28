import React, { createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import { query, where, collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AppContext = ({ children }) => {
    const collectionUsersRef = collection(db, "users");
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [userData, setUserData] = useState();

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const popup = await signInWithPopup(auth, provider);
            const user = popup.user;
            const q = query(collectionUsersRef, where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if(docs.docs.length === 0) {
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
            console.log(err.message);
        }
    };

    const loginWithEmailAndPassword = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collectionUsersRef, {
                uid: user.uid,
                name,
                providerId: 'email/password',
                email: user.email,
            });
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const sendPasswordToUser = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("New password sent to your email");
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const signOutUser = async () => {
        await signOut(auth);
    };


    const userStateChanged = async () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in
                const q = query(collectionUsersRef, where('uid', "==", user.uid));
                await onSnapshot(q, (snapshot) => {
                    snapshot.forEach((doc) => {
                        setUserData(doc.data());
                    });
                });
                setUser(user);
            } else {
                // User is not signed in
                setUser(null);
                // Check current path before redirecting
                const currentPath = window.location.pathname;
                if (currentPath === '/add-pets') {
                    navigate('/sign-in'); // Redirect to sign-in if trying to access /add-pets
                }
            }
        });
    };
    
    
    
    

    useEffect(() => {
        const unsubscribe = userStateChanged();
        return () => unsubscribe();
    }, []);

    const initialState = {
        signInWithGoogle: signInWithGoogle,
        loginWithEmailAndPassword: loginWithEmailAndPassword,
        registerWithEmailAndPassword: registerWithEmailAndPassword,
        sendPasswordToUser: sendPasswordToUser,
        signOutUser: signOutUser,
        user: user,
        userData: userData,
    };

    console.log("user", user);
    console.log("userdata", userData);


    return (
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    );
};

export default AppContext;
