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

form {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        font-size:16px;
        height:25vw;
        padding:40px;
        width:40vw;
    }

    label{
        font-weight: bold;
        margin-top:1vh;

        input{
            border: 1px solid #ccc;
            margin:1vh 3vh 1vh 0;
            height:4vh;
            width:16vw;
        }
    }

div.cart {
    align-items:center;
    display:flex;
    flex-direction: column;
    height:25vw;
    width:40vw;
    

    table{
        margin:2vw;
        thead{
            tr {
                height:4vh;
                width:36vw;

                th{
                    width:9vw;
                    text-align:center;
                }
            }
        }

        tbody{
            

            tr {
                height:4vh;
                width:36vw;
                
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
        width:10vw;

        :hover {
            font-weight:bold;
            height:45px;
            color: white;
        }
    }
}

`;

