import { useEffect, useState } from "react"
import { getPosts} from "../../services/postService"
import { useAuth } from "../../context/AuthContext"
import PostCard from "./PostCard"
import CreatePost from "./CreatePost"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import "./Community.css"

const Community = () => {
  const [posts, setPosts] = useState([])

  const load = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="community">

      <h1>Novedades y Comunidad</h1>

      {/* Form para publicar */}
      <CreatePost reload={load} />

      {/* Lista de posts */}
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          reload={load}
        />
      ))}

    </div>
  )
}

export default Community
