import PublicHeader from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/authService"

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await loginUser(email, password)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <PublicHeader/>
            <section className="login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input
                        className="login__input"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="button">Ingresar</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default Login