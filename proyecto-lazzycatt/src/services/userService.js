import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export const createUserProfile = async (user, { username, country }) => {
  const userRef = doc(db, "users", user.uid)

  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    username,
    country,
    createdAt: new Date(),
    wishlist: [],
    library: [],
  })
}

export const getUserProfile = async (uid) => {
  const userRef = doc(db, "users", uid)
  const snapshot = await getDoc(userRef)

  if (!snapshot.exists()) return null
  return snapshot.data()
}