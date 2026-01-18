import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import FeaturedGame from "./FeaturedGame"
import './Categories.css'

const categoryList = [
    "Action RPG",
    "Open World",
    "Survival Horror",
    "Shooter",
    "RPG",
    "Soulslike"
]

const Categories = ({ games }) => {
    const [activeCategory, setActiveCategory] = useState(categoryList[0])

    const filteredGames = games
        .filter(game => game.category === activeCategory)
        .slice(0, 4)

    return (
        <section className="categoriesBox">
            <h1>Categorías</h1>


            <div className="categoriesBox__buttons">
                {categoryList.map(category => (
                    <button
                        key={category}
                        className={activeCategory === category ? "active" : ""}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>


            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
            >
                {filteredGames.map(game => (
                    <SwiperSlide key={game.id}>
                        <FeaturedGame game={game} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Categories
