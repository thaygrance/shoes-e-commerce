import api from "../../services/api";
import { DetailsTag, ButtonTag } from "./styles";
import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

export function Details () {

  const [shoes, setShoes] = useState([]);
  let { id } = useParams();
  
  useEffect(()=> {
       api 
      .get(`/${id}`)
      .then(response=>{
      setShoes(response.data);
      })
      .catch(err => console.log(err));
});

    return(
        <>
        <DetailsTag>
            <div id="img">
                <img src={shoes.image} alt=""/>
            </div>
            <div id="details">
                <h2> {shoes.name} </h2>
                <p>{shoes.description}</p>
                <label for="tamanho">Tamanho: </label>
                <select id="tamanho" name="tamanho">
                    <option value="escolha">escolha o tamanho</option>
                    <option value="33-34" >33-34</option>
                    <option value="35-36" > 35-36</option>
                    <option value="37-38" >37-38</option>
                    <option value="39-40" >39-40</option>
                </select>
                <h3>Preço:<span>${shoes.price}</span></h3>
                
                <button>
                    Adicionar ao Carrinho
                </button>
            </div> 
        </DetailsTag>
        <ButtonTag>
            <Link to={"/"}>
                <button> 
                    Voltar 
                </button>       
            </Link> 
        </ButtonTag>
        </>                     
    )
}




















