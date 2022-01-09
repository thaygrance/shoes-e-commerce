import styled from "styled-components";


export const FooterTag = styled.footer` 
    
    align-items:center;
    display:flex;
    height:14vh;
    justify-content:space-between;
    padding: 0vw 10vw;
    width:100%;
    

    p {
        color:#ec1f23;
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:16px;
        line-height:1.5;
        padding: 1vw;
        text-align:left;

        a {
            color:#ec1f23;
            font-weight:bold;
            text-decoration:none;

        }
    }

    @media (orientation:portrait) {
        p{
            font-size:14px;
            margin: 1vw 0;
        }
        
    }
`; 