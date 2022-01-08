import { Header } from "../../components/Header";
import { Details } from "../../components/Details";
import cartImg from "../../assets/images/shopping-cart-solid.png"

export function ShoesDetails(){
    return(
        <>
        <Header toLink={"/shoppingcart"} imgButton={cartImg}>
            Seu Carrinho
        </Header>
        <Details/>
        </>
    )
}