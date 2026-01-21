import { useState } from "react"
import { Link } from "react-router-dom"
import './Footer.css'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {

    return (
        <footer className="footer">
            <div className="navUs">
                <Link to="/AboutUs">Acerca de Nosotros</Link>
                <Link to="/Support">Soporte</Link>
                <Link to="/Politics">Políticas</Link>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>

            <hr className="footer-line" />

            <div className="authors">
                <p>
                    Diseñado y programado por: <strong>Daniel Orozco y Gabriel Toaquiza</strong>
                    <br />
                    Derechos reservados @ 2026
                </p>
            </div>
        </footer>
    )
}

export default Footer