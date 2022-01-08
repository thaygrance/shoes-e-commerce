import styled from "styled-components";

export const CardGrid = styled.main` 
    background: white;
    display:flex;
    flex-wrap:wrap;   
`; 

export const Card = styled.div`
    
    border: 2px solid gray;
    border-radius: 3px;
    height:460px;
    margin:20px;
    width:350px;

    img {
        width:100%;
    }

    h2 {
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:16px;
        text-align:center;
    }
    button{
        background: #ec1f23;
        border:0;
        border-radius:3px;
        font-size:16px;
        height:40px;
        margin:20px 115px;
        width:120px;

        :hover {
            font-weight:bold;
            height:45px;
            color: white;
        }
    }

`;

