import PublicHeader from "../../components/PublicHeader/PublicHeader"
import Footer from "../../components/Footer/Footer"

import { useState } from "react"
import { registerUser } from "../../services/authService"

import "./Register.css"

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handldSumnb = async(e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <PublicHeader />
            <section className="register">
                <form onSubmit={handldSumnb}>
                    <h1 className="">Register</h1>
                    <input 
                        className="register__input"
                        type="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="register__input"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">Registrarse</button>
                </form>

            </section>

            <Footer />
        </>
    )
}

export default Register