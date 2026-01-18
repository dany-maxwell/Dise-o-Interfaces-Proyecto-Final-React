import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FeaturedGame from './FeaturedGame'

const Offers = ({ games }) => {
    return (
        <section className="offers">
            <h1>Ofertas</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                slidesPerView={1}
                className='offers__swiper'>
        {games.map(game => (
          <SwiperSlide key={game.id}>
            <FeaturedGame game={game} />
          </SwiperSlide>
        ))}
            </Swiper>
        </section>
    )
}

export default Offers