import "../../styles-pag/InfoPages.css";

const Politics = () => {
    return (
        <>
            <main>
                <section id="politicas">
                    <h2>Políticas de la Tienda</h2>

                    <h3>1. Compras y Entregas</h3>
                    <p>
                        Todos los juegos se entregan de forma digital una vez confirmado el pago.
                        El proceso puede tardar unos minutos dependiendo del método de pago utilizado.
                        Una vez aprobado, recibirás un correo de confirmación con los detalles de tu compra.
                    </p>
                    <p>
                        También puedes acceder a tus juegos desde la sección “Biblioteca” dentro de tu perfil.
                        Es responsabilidad del usuario verificar que su dirección de correo esté correctamente registrada.
                    </p>

                    <h3>2. Reembolsos</h3>
                    <p>
                        No se realizan reembolsos una vez que el juego ha sido activado o descargado.
                        Esto se debe a la naturaleza digital de los productos.
                    </p>
                    <p>
                        Si experimentas un problema técnico, error de compra o contenido incorrecto,
                        debes contactarnos dentro de los primeros 3 días posteriores a la compra.
                        Cada caso será revisado individualmente por el equipo de soporte.
                    </p>

                    <h3>3. Cuentas y Seguridad</h3>
                    <p>
                        El usuario es responsable de mantener la confidencialidad de su cuenta y contraseña.
                        No compartas tu acceso con terceros.
                    </p>
                    <p>
                        La tienda no se hace responsable por pérdidas, accesos no autorizados o daños
                        ocasionados por negligencia del usuario en la protección de su información.
                    </p>

                    <h3>4. Privacidad</h3>
                    <p>
                        Tus datos personales se utilizan únicamente para procesar pedidos, mejorar la experiencia
                        de usuario y brindar soporte técnico.
                    </p>
                    <p>
                        No compartimos tu información con terceros, excepto cuando sea requerido por ley
                        o necesario para completar el proceso de pago mediante plataformas seguras.
                    </p>

                    <h3>5. Uso del Servicio</h3>
                    <p>
                        Está prohibido utilizar la tienda para actividades fraudulentas, distribución ilegal
                        de contenido o intentos de vulnerar la seguridad del sistema.
                    </p>
                    <p>
                        Nos reservamos el derecho de suspender cuentas que incumplan estas normas
                        sin previo aviso.
                    </p>

                    <h3>6. Soporte</h3>
                    <p>
                        Nuestro equipo de soporte está disponible para ayudarte con cualquier duda o problema.
                        Intentamos responder todas las solicitudes en un plazo de 24 a 48 horas hábiles.
                    </p>
                    <p>
                        Puedes contactarnos en cualquier momento a través del correo:
                        {" "}
                        <a href="mailto:soporte@LazzyCattGames.com">
                            <strong>soporte@LazzyCattGames.com</strong>
                        </a>
                    </p>

                    <h3>7. Cambios en las Políticas</h3>
                    <p>
                        Estas políticas pueden actualizarse periódicamente para mejorar el servicio.
                        Recomendamos revisarlas de forma ocasional.
                        El uso continuo de la tienda implica la aceptación de los cambios realizados.
                    </p>
                </section>

            </main>
        </>
    )
}

export default Politics
