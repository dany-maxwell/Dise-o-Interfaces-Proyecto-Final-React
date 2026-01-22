import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

import PublicActions from "./PublicActions/PublicActions"
import UserActions from "./UserActions/UserActions"

import './Header.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }
    const closeMenu = () => {
        setMenuActive(false)
    }

    const { user } = useAuth()

    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo">
                    <h1>LazzyCatt</h1>
                </div>
                <div className={`header__barra ${menuActive ? "active" : ""}`}>
                    <div className="navigation">
                        <Link to="/" className="navigation__link" onClick={closeMenu}>TIENDA</Link>
                        <Link to="/news" className="navigation__link" onClick={closeMenu}>NOVEDADES</Link>
                    </div>
                    <div className="browser">
                        <input type="text" name="search" placeholder="Buscar" className="search"/>
                    </div>
                    <div className="header__actions">
                        {user ? <UserActions /> : <PublicActions />}
                    </div>
                </div>
                <div className="header__hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header