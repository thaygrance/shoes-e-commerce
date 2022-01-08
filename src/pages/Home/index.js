import { Header } from "../../components/Header";
import { CardDiv } from "../../components/Cards"
import cartImg from "../../assets/images/shopping-cart-solid.png"


export function Home(){
    return(
        <>
        <Header toLink={"/shoppingcart"} imgButton={cartImg}>
            Seu Carrinho
        </Header>
        <CardDiv/>
        </>
    )
}