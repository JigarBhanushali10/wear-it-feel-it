import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { createContext, useState } from "react";
import { auth } from '../services/Firebase.config';

export const AuthContext = createContext({
    userAuthData: {} as any,
    // setUserAuthData: (userData: any) => { },
    storeUserAuthData: (userAuthData: any) => { }
})
export const Provider = AuthContext.Provider

type AuthContextProvider = {

    children: React.ReactNode

};


function AuthProvider(props: AuthContextProvider) {
    const [userAuthData, setUserAuthData] = useState({})
    function storeUserAuthData(userAuthData: any) {
        if (userAuthData) setUserAuthData(JSON.stringify(userAuthData))
        console.log(userAuthData);
        localStorage.setItem('accessToken', userAuthData?.user?.accessToken);
    }
    onAuthStateChanged(auth, (currentUser: any) => {
        setUserAuthData(currentUser)
    })
    const userDataContext = {
        userAuthData,
        storeUserAuthData: storeUserAuthData,
    };

    return (
        <AuthContext.Provider value={userDataContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
