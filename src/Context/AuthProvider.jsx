import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [role , setrole] = useState(null)
    // signup
    const signup = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () =>{
        return signOut(auth)
    }
    // observer
    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
            if(currentUser){
                fetch(`http://localhost:3000/users/${currentUser.email}`)
                .then(res=> res.json())
                .then(data =>{
                    setrole(data.role)
                    console.log("Database response:", data);
                })
            }
        })
        return () => unsubscrib() 
    },[])
    const UserInfo = {
        signup,
        login,
        logout,
        user,
        role,
        
    }
    return <AuthContext.Provider value={UserInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;