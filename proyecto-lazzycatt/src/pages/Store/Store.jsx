import Offers from './Offers/Offers';
import ForYou from './ForYou/ForYou';
import Categories from './Categories/Categories';
import { games } from "../../data/games";

import './Store.css'
const Store = () => {
    const featuredGames = games.filter(game => game.featured);
    return (
        <>
            <Offers games = {featuredGames}/>
            <ForYou games = {games}/>
            <Categories games = {games} />  
        </>
    )
}
export default Store