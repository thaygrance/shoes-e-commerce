import styled from "styled-components";


export const MainTag = styled.main`
  
    font-family: 'ffdin Medium', FFDIN, Arial, sans-serif;
    margin: 5vw 10vw;

    h1 {
        font-size: 30px;
        margin-left:40px;
    }

`;

export const ShoppingCartTag = styled.div` 

    display:flex; 
    flex-direction:row;
    flew-wrap:wrap;

    div.form {

        form {
            display: flex;
            flex-direction:column;
            flex-wrap:wrap;
            font-size:16px;
            padding:40px;
            min-width:400px;
            width:40vw;
        

        label{
            font-weight: bold;
            margin-top:1vh;

            input{
                border: 1px solid #ccc;
                margin:1vh 3vh 1vh 0;
                height:4vh;
                min-width:300px;
                width:30vw;
            }
        }
        }
    }

div.cart {
    align-items:center;
    display:flex;
    flex-direction: column;
    width:40vw;
    

    table{
        margin:2vw;
        width:40vw;
        thead{
            tr {
                height:4vh;
                width:90%;

                th{
                    width:25%;
                    text-align:center;
                }
            }
        }

        tbody{
            

            tr {
                height:4vh;
                width:90%;
                
                td#bg{
                    background-color:#eee;
                    border-top: 4px solid #ccc;   
                }
                td{
                    border-top: 4px solid #ccc;
                    padding:1vw;
                }
            }
        }
    }

    button{
        background: #ec1f23;
        border:0;
        border-radius:3px;
        font-size:16px;
        height:40px;
        min-width:120px;
        width:10vw;

        :hover {
            font-weight:bold;
            height:45px;
            color: white;
        }
    }

    @media (orientation: portrait){
    width:400px;

    }
}

@media (orientation: portrait){
    flex-direction:column;

}

    

`;

