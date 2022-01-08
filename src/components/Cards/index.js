import api from "../../services/api";
import { Card, CardGrid } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function CardDiv () {

    const [shoes, setShoes] = useState([]);
    
    useEffect(()=> {
         api 
        .get('/')
        .then(response=>{
        setShoes(response.data);
        })
        .catch(err => console.log(err));
        },[]);

 
    return(
        <CardGrid>
              {shoes.map(shoes => {
                return (
                    <Card className={shoes.id}>
                        <img src={shoes.image} alt=""/>
                        <h2> {shoes.name} </h2>
                        <Link to={`/shoesdetails/${shoes.id}`}>
                            <button> VEJA MAIS </button>
                        </Link>
                        
                    </Card>
                            )
            })}

        </CardGrid>
    )
}



  