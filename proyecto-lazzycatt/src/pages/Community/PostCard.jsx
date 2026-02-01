import { useAuth } from "../../context/AuthContext"
import { likePost } from "../../services/postService"

const PostCard = ({ post, reload }) => {
  const { user } = useAuth()

  const handleLike = async () => {
    await likePost(post.id, user.uid)
    reload()
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return ""
    return new Date(timestamp.seconds * 1000)
      .toLocaleDateString()
  }

  const labels = {
    news: "📰 Noticia",
    update: "🎮 Actualización",
    community: "💬 Comunidad"
  }

  return (
    <div className="postCard">

      <div className="postCard__header">
        <span className={`postCard__type ${post.type}`}>
          {labels[post.type]}
        </span>

        <span className="postCard__date">
          {formatDate(post.createdAt)}
        </span>
      </div>

      <h3 className="postCard__title">
        {post.title}
      </h3>

      <p className="postCard__content">
        {post.content}
      </p>

      <div className="postCard__footer">

        <span className="postCard__author">
          Por: {post.authorName}
        </span>

        {user && (
          <button
            className="postCard__like"
            onClick={handleLike}
          >
            <i class="fa-solid fa-heart"></i>  {post.likes?.length || 0}
          </button>
        )}

      </div>

    </div>
  )
}

export default PostCard
