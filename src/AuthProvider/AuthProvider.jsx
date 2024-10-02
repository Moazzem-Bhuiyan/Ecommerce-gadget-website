

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase";


const auth = getAuth(app);

export const Authcontext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)

    const createUser = (email,password)=>{

        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{

        setLoading (false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)

        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{

            setUser(currentUser)
            setLoading(false)

        })
        return()=>{
            unSubscribe();
        }



    },[])

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

        
    }

    return (
        <Authcontext.Provider value={authinfo}>

            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;