import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Tienda = () => {
    return (
        <>
            <main className='content'>
            <Header />
            <h1>Ofertas</h1>
            </main>
            <Footer />
        </>
    )
}
export default Tienda