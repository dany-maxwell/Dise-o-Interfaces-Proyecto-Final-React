import { useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
        console.log("hola")
    }
    const closeMenu = () => {
        setMenuActive(false)
        console.log("chao")
    }

    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo">
                    <h1>LazzyCatt</h1>
                </div>
                <div className={`header__barra ${menuActive ? "active" : ""}`}>
                    <div className="navegacion">
                        <Link to="/" className="navegacion__link" onClick={closeMenu}>TIENDA</Link>
                        <Link to="/news" className="navegacion__link" onClick={closeMenu}>NOVEDADES</Link>
                    </div>
                    <div className="browser">
                        <input type="text" placeholder="Buscar" className="search"/>
                    </div>
                    <div className="buttons">
                        <Link to="/login" className="button" onClick={closeMenu}>Login</Link>
                        <Link to="/register" className="button" onClick={closeMenu}>Registro</Link>
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