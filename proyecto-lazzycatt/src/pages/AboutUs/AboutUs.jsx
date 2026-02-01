import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import gatoImg from "../../assets/games/gato-like.jpg";
import "../../styles-pag/InfoPages.css";


const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="hidden-title">
          LazyCattGames - Tienda de videojuegos digitales
        </h1>

        <section id="acerca">
          <h2>Acerca de LazyCattGames</h2>

          <p>
            En <strong>LazyCattGames</strong> amamos los videojuegos tanto como tú.
            Somos una comunidad gamer enfocada en ofrecer títulos digitales de forma
            rápida, segura y sin complicaciones. Creemos que jugar debe ser fácil,
            accesible y emocionante desde el primer clic.
          </p>

          <p>
            Nuestro objetivo es acercarte a tus juegos favoritos a precios justos,
            con un sistema de compra simple y entregas digitales inmediatas.
            Trabajamos constantemente para mantener un catálogo actualizado,
            incluir nuevas propuestas y ofrecer promociones especiales.
          </p>

          <p>
            Valoramos la confianza de nuestros usuarios. Por eso priorizamos la
            seguridad de las cuentas, la protección de datos y un soporte cercano
            cuando lo necesites. Queremos que tu experiencia en la tienda sea tan
            buena como el juego que estás por disfrutar.
          </p>

          <p>
            Ya sea que busques aventuras épicas, desafíos competitivos, historias
            inmersivas o simplemente relajarte después de un día largo,
            en <strong>LazyCattGames</strong> encontrarás el título ideal para ti.
          </p>

          <p>
            Esto es más que una tienda: es un espacio para jugadores,
            creado por personas que también aman este mundo.
            ¡Gracias por formar parte de nuestra comunidad gamer! 😸🎮
          </p>

          <figure className="gato-container">
            <img
              src={gatoImg}
              alt="Gato gamer representando la comunidad LazyCattGames"
              className="gato-img"
            />
            <figcaption>Nuestra mascota oficial aprobando tus compras 🐱</figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs
