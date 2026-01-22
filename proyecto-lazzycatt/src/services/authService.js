import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const registerUser = async (email, password, username) => {
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user,{
        displayName: username
    })

    return user
}

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => {
    return signOut (auth);
}