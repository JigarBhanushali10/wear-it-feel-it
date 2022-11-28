import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./Firebase.config";

/**
 * @name signUp
 * @param data 
 * @description createUserWithEmailAndPassword firebase method which posts user data with auth configs
 * @returns promise
 */
const signUp = async (data: any) => {
    const email = data.signupEmail
    const password = data.signupPassword
    const currentUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
    return currentUser

}

/**
 * @name logOut
 * @description calls signOut method  of fire base to log out user 
 */
const logOut = async () => signOut(auth)

/**
 * @name signIn
 * @param data 
 * @description signInWithEmailAndPassword firebase method which posts user data with auth configs
 * @returns promise
 */
const signIn = async (data: any) => {
    const email = data.signInEmail
    const password = data.signInPassword
    const userPromise = await signInWithEmailAndPassword(auth, email, password)
    return userPromise
}

const signInWithGoogleAccount = () => {
    return signInWithPopup(auth, provider)
}

const authService = {
    signIn,
    signUp,
    logOut,
    signInWithGoogleAccount
}

export default authService