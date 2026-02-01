import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import "../../styles-pag/profile.css"


const Profile = () => {
  const { profile } = useAuth()
  const [avatar, setAvatar] = useState(
  localStorage.getItem(`avatar_${profile.email}`) || null
)

  if (!profile) return null


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      const base64 = reader.result
      setAvatar(base64)
      localStorage.setItem(`avatar_${profile.email}`, base64)
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <main className="profile-container">

        {/* TARJETA PERFIL */}
        <section className="profile-card">
          <div className="avatar-section">
            <img
              src={avatar || "/default-avatar.png"}
              alt=""
              className="avatar"
            />
            <label className="upload-btn">
              Cambiar foto
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </label>
          </div>

          <h2>{profile.username}</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>País:</strong> {profile.country}</p>
        </section>

        {/* TARJETA BIBLIOTECA */}
        <section className="library-card">
          <h2>Mi Biblioteca</h2>

          <div className="library-grid">
            {/* Ejemplo visual */}
            <div className="game-item">Juego 1</div>
            <div className="game-item">Juego 2</div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Profile