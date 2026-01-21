import Header from '../../components/PublicHeader/PublicHeader';
import Footer from '../../components/Footer/Footer';

import Offers from './Offers';
import ForYou from './ForYou';
import Categories from './Categories';
import { games } from "../../data/games";
const Store = () => {
    const featuredGames = games.filter(game => game.featured);
    return (
        <>
            <Header />
            <Offers games = {featuredGames}/>
            <ForYou games = {featuredGames}/>
            <Categories games = {featuredGames} />
            <Footer games = {featuredGames}/>    
        </>
    )
}
export default Store