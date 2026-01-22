import PublicHeader from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerUser } from "../../services/authService"

import "./Register.css"
import { createUserProfile } from "../../services/userService"

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const user = await registerUser(email, password, username)
            await createUserProfile(user, {username, country})
            navigate('/login')
        } catch (error) {
            alert(error.message);
            console.error('Register Error:', error)
        }
    };

    return (
        <>
            <PublicHeader />
            <section className="register">
                <form onSubmit={handleRegister}>
                    <h1 className="">Register</h1>
                    <input 
                        className="register__input"
                        type="email"
                        name="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        className="register__input"
                        type="text"
                        name="username"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="register__input"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <select 
                        className="register__input"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Selecciona tu pais
                        </option>
                        <option value="EC">Ecuador</option>
                        <option value="CO">Colombia</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brazil</option>
                        <option value="UR">Usuguay</option>
                        <option value="VE">Venezuela</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="BO">Bolivia</option>
                        <option value="CL">Chile</option>
                    </select>
                    <button className="button" type="submit">Registrarse</button>
                </form>

            </section>

            <Footer />
        </>
    )
}

export default Register