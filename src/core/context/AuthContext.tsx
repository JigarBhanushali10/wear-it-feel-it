import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../services/Firebase.config';

export const AuthContext = createContext({
    // initail value
    userAuthData: {} as any,
    storeUserAuthData: (userAuthData: any) => { }
})
export const Provider = AuthContext.Provider

type AuthContextProvider = {

    children: React.ReactNode

};

/**
 * @name AuthProvider
 * @returns children
 */
function AuthProvider(props: AuthContextProvider) {
    // use state hook to set user auth data 
    const [userAuthData, setUserAuthData] = useState({})

    /**
     * @name storeUserAuthData
     * @param userAuthData 
     * @description :  set user auth data and accesstoken to localstorage
     * @returns props.children
     */
    function storeUserAuthData(userAuthData: any) {
        if (userAuthData) setUserAuthData(JSON.stringify(userAuthData))
        localStorage.setItem('accessToken', userAuthData.accessToken);
    }
    const userDataContext = {
        userAuthData,
        storeUserAuthData,
    };

   
    useEffect(() => {
        /**
         * @name onAuthStateChanged
         * @description is called on signIN or signUp and set current user to local state 
         */
        onAuthStateChanged(auth, (currentUser: any) => {
            setUserAuthData(currentUser)
            
        })
        return () => {
        }
    }, [userAuthData])

    return (
        <AuthContext.Provider value={userDataContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
