import { db } from '../firebase/firebase'
import {
    collection, addDoc, getDocs, orderBy, serverTimestamp,
    doc, updateDoc, deleteDoc, arrayUnion, arrayRemove, query
} from 'firebase/firestore'

export const createPost = async (post) => {
    return addDoc(collection(db, "posts"), {
        ...post,
        createAt: serverTimestamp(),
        likes: []
    })
}

export const deletePost = async (postId) => {
  await deleteDoc(doc(db, "posts", postId))
}

export const getPosts = async () => {
    const q = query(
        collection(db, "posts"),
        orderBy("createAt", "desc")
    )
    const snap = await getDocs(q)
    return snap.docs.map(d => ({
        id: d.id,
        ...d.data()
    }))
}

export const toggleLike = async (post, userId) => {
    const ref = doc(db, "posts", post.id)

    const yaDioLike = post.likes?.includes(userId)

    await updateDoc(ref, {
        likes: yaDioLike
            ? arrayRemove(userId)
            : arrayUnion(userId)
    })
}