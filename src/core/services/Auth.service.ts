import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./Firebase.config";

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

const logOut = async () => signOut(auth)

const signIn = async (data: any) => {
    const email = data.signInEmail
    const password = data.signInPassword
    const userPromise = await signInWithEmailAndPassword(auth, email, password)
    return userPromise
}



const authService = {
    signIn,
    signUp,
    logOut
}

export default authService