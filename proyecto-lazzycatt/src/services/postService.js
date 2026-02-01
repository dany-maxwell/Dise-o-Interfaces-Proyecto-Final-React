import { db } from '../firebase/firebase'
import {
    collection, addDoc, getDocs, orderBy, serverTimestamp,
    doc, updateDoc, arrayUnion, query
} from 'firebase/firestore'

export const createPost = async (post) => {
    return addDoc(collection(db, "post"), {
        ...post,
        createAt: serverTimestamp(),
        likes: []
    })
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

export const likePost = async (postId, userId) => {
    const ref = doc (db, "posts", postID)
    await updateDoc(ref, {
        likes: arrayUnion(userid)
    })
}

