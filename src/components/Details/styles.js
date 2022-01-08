import styled from "styled-components";

export const DetailsTag = styled.main` 
    background: white;
    display:flex;
    flex-wrap:wrap;  
    font-family:'ffdin Medium', FFDIN, Arial, sans-serif; 
    justify-content: center; 


    div {    
    border: 2px solid gray;
    border-radius: 3px;
    height:460px;
    margin:20px;
    width:350px;
    }
    
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
        border-radius:5px;
        font-size:16px;
        height:40px;
        margin:20px 115px;
        width:180px;

        :hover {
            font-weight:bold;
            height:45px;
            color: white;
        }
    }

`;

export const ButtonTag=styled.div`
    display:flex;
    justify-content:center;
    margin-top: 5vh;

    button{
        background: #ec1f23;
        border:0;
        border-radius:5px;
        color: white;
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:20px;
        font-weight:bold;
        height:40px;
        margin:20px 115px;
        width:180px;
        
        :hover {
                
                height:45px;
        }
    }
`;
