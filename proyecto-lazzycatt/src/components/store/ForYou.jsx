//yo mero
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FeaturedGame from './FeaturedGame'

const ForYou = ({ games }) => {
    return (
        <section className="forYou">
            <h1>Para Ti</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                slidesPerView={4}
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

export default ForYou