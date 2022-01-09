import { Header } from "../../components/Header";
import homeImg from "../../assets/images/home-solid.png"
import { ShoppingCart } from "../../components/ShoppingCart";
import { Footer } from "../../components/Footer"

export function Cart(){
    return(
        <>
        <Header imgButton={homeImg} toLink={"/"}>
            Página Inicial 
        </Header>
        <ShoppingCart/>
        <Footer/>
        </>
    )
}
