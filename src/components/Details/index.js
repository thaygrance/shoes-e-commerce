import api from "../../services/api";
import { DetailsTag, ButtonTag } from "./styles";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

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
            <div id="detais">
                <h3> {shoes.name} </h3>
                <p>{shoes.description}</p>
                <label for="tamanho">TAMANHO: </label>
                <select id="tamanho" name="tamanho">
                    <option value="33-34">33-34</option>
                    <option value="35-36">35-36</option>
                    <option value="37-38">37-38</option>
                    <option value="39-40">39-40</option>
                </select>
                <h3>PREÇO</h3>
                <span></span>
                <button>ADICIONAR AO CARRINHO</button>
            </div> 
        </DetailsTag>
        <ButtonTag>
            <button> 
                Voltar 
            </button>        
        </ButtonTag>
        </>                     
    )
}




















