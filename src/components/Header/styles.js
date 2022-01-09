import styled from "styled-components";


export const HeaderTag = styled.header`

align-items:center;
display:flex;
height:22vh;
justify-content:space-between;
padding: 0 10vw;
width:100%;

img{
    height: 16vh;
}

a:link {
    text-decoration: none; 
}
button{
    align-items:center;
    justify-content:center;
    background: #ec1f23;
    border:0;
    border-radius:5px;
    color: white;
    display:flex;
    font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
    font-weight:bold;
    font-size:2.6vh;
    height:6vh;
    padding: 1vh;
    width:15vw; 
    
    img{
        height:4vh;
        width:4vh;
        margin-right:1vh;
    }
}

`; 