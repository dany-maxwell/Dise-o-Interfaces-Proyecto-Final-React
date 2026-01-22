import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Offers from './Offers/Offers';
import ForYou from './ForYou/ForYou';
import Categories from './Categories/Categories';
import { games } from "../../data/games";

import './Store.css'
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