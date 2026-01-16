import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/Firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
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

    const UserInfo = {
        signup,
        login,
        logout,
    }
    return <AuthContext.Provider value={UserInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;