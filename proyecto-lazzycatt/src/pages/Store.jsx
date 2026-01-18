import Header from '../components/Header'
import Offers from '../components/store/Offers'
import { games } from "../data/games";

const Tienda = () => {
    return (
        <>
            <Header />
            <Offers games ={games}/>
            
        </>
    )
}
export default Tienda