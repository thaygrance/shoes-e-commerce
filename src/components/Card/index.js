import api from "../../services/api";
import { useCallback, useEffect, useState } from "react";

export function Card () {

    const [shoes, setShoes] = useState([]);
    
    useEffect(()=> {
         api 
        .get('/')
        .then(response=>{
        setShoes(response.data);
        })
        .catch(err => console.log(err));
        },[]);

    const loadShoes = useCallback (async () => {
        try {
            const offset = shoes.length;
            const response = await api.get('/', {
                params: {
                    offset,
                },
            });
            setShoes(...[shoes, ...response.data])
        }
        catch(err) {
            console.log(err);
        }
    }, [shoes])

    loadShoes()

    return(
        <>
              {shoes.map(shoes => {
                return (
                    <>
                        <div key={shoes.id}> 
                        <h2> {shoes.id} </h2>
                        <h3> {shoes.name} </h3>
                        <img src={shoes.image} alt=""/>
                        <p>{shoes.description}</p>
                        </div>
                    </>
                )
            })}

        </>
    )
}



  