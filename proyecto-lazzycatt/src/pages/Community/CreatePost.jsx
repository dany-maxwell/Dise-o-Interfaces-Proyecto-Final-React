import { useState } from "react"
import { createPost } from "../../services/postService"
import { useAuth } from "../../context/AuthContext"

const CreatePost = ({ reload }) => {
  const { user } = useAuth()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState("community")

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createPost({
      title,
      content,
      type,
      authorId: user.uid,
      authorName: user.displayName
    })

    setTitle("")
    setContent("")

    reload()
  }

  if (!user) {
    return <p>Inicia sesión para publicar</p>
  }

  return (
    <form className="postForm" onSubmit={handleSubmit}>

      <select
        value={type}
        onChange={e => setType(e.target.value)}
      >
        <option value="community">Comunidad</option>
        <option value="news">Noticia</option>
        <option value="update">Actualización</option>
      </select>

      <input
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="¿Qué quieres compartir?"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />

      <button>Publicar</button>

    </form>
  )
}

export default CreatePost
