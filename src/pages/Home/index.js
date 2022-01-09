import { Header } from "../../components/Header";
import { CardDiv } from "../../components/Cards"
import cartImg from "../../assets/images/shopping-cart-solid.png"
import { Footer } from "../../components/Footer"


export function Home(){
    return(
        <>
        <Header toLink={"/shoppingcart"} imgButton={cartImg}>
            Seu Carrinho
        </Header>
        <CardDiv/>
        <Footer/>
        </>
    )
}