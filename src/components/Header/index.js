
import { HeaderTag } from "./styles";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/pumalogo.png";

export function Header({toLink, imgButton, children}){

    return(
        <HeaderTag>
            <img src={logo} alt="logotipo"/>
            <Link to={toLink}>
                <button>
                    <img src={imgButton} alt="" />
                    {children}
                </button>
            </Link>
        </HeaderTag>
    )
}

