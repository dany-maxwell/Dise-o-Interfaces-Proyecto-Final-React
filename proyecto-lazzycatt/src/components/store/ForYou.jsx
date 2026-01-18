import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GameCard from "../GameCard"

const ForYou = ({ games }) => {
    return (
        <section className="forYou">
            <h1>Para Ti</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                
                loop
                slidesPerView={3}
                className='foryou__swiper'>
                {games.map(game => (
                    <SwiperSlide key={game.id}>
                        <GameCard game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default ForYou