import styled from "styled-components";

export const DetailsTag = styled.main` 
    background: white;
    display:flex;
    flex-wrap:wrap;  
    font-family:'ffdin Medium', FFDIN, Arial, sans-serif; 
    justify-content: space-evenly; 
    margin:5vw;


    #img {    
        border: 2px solid #eee;
        border-radius: 3px;
        display:flex;
        align-items:center;
        height:460px;
        margin:5vh;
        width:450px;

        img {
            width:100%;
        }

        @media (orientation:portrait){
        height: 140vw;
        margin:0;
        margin-bottom:5vh;
        width:100%;
    }
    }

    #details {    
    border: 2px solid #eee;
    border-radius: 3px;
    display:flex;
    flex-direction:column;
    height:460px;
    margin:5vh;
    padding:30px;
    width:450px;

    @media (orientation:portrait){
        height: 140vw;
        margin:0;
        width:100%;
    }

    }
    
    h2 {
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:20px;
        padding-bottom:20px;
        text-align:center;
    }

    p {
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:16px;
        line-height:1.5;
        padding-bottom:20px;
        text-align:left;
    }

    label {
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:18px;
        font-weight:bold;
        line-height:1.5;
        text-align:left;

    }

    select {
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:16px;
        height:40px;;
        line-height:1.5;
        margin: 10px 0;
        text-align:left;
    }
   
    h3{
        font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
        font-size:18px;
        font-weight:bold;
        line-height:1.5;
        text-align:left;

        span{
            font-size:18px;
            font-weight:regular;
        }
    }
    button{
        align-self:center;
        background: #ec1f23;
        border:0;
        border-radius:5px;
        font-size:16px;
        height:40px;
        margin:20px 0;
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
        margin-bottom:5vw;
        width:180px;
        
        :hover {
                
                height:45px;
        }
    }
`;
