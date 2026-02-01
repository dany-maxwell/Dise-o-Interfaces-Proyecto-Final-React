import { useState, useRef, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { signOutUser } from "../../../services/authService"
import { Link } from "react-router-dom"

const UserActions = () => {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const handleLogout = async () => {
    await signOutUser()
  }

  return (
    <div className="userMenu" ref={ref}>

      <div
        className="userMenu__trigger"
        onClick={() => setOpen(!open)}
      >
        <span>{user?.displayName}</span>

        {/* icono genérico */}
        <span className="userMenu__icon"><i class="fa-solid fa-user"></i></span>
      </div>

      {open && (
        <div className="userMenu__dropdown">

          <Link to="/profile" onClick={() => setOpen(false)}>
            Perfil
          </Link>

          <button onClick={handleLogout}>
            Cerrar sesión
          </button>

        </div>
      )}

    </div>
  )
}

export default UserActions
