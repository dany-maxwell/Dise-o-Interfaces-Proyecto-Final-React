import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/store/Offers';
import { games } from "../data/games";

const Store = () => {
    const featuredGames = games.filter(game => game.featured);
    return (
        <>
            <Header />
            <Offers games = {featuredGames}/>
            <Footer />    
        </>
    )
}
export default Store