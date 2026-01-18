import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/store/Offers';
import ForYou from '../components/store/ForYou';
import Categories from '../components/store/Categories';
import { games } from "../data/games";

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