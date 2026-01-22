import { useAuth } from "../../../context/AuthContext"
import { signOutUser } from "../../../services/authService"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const UserActions = () => {
    const { user, profile } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await signOutUser()
        navigate('/')
    }

    const username = user?.displayName || profile?.username

    return (
        <div className="header__user">
            <span>
                {username}
            </span>

            <Link to="/profile" className="button">Perfil</Link>
            <button onClick={handleLogout} className="button">Salir</button>
        </div>
    )
}

export default UserActions