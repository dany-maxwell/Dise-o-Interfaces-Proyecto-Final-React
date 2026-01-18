import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/store/Offers';
import { games } from "../data/games";

const Store = () => {
    return (
        <>
            <Header />
            <Offers games = {games}/>
            <Footer />    
        </>
    )
}
export default Store