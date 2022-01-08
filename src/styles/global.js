import { createGlobalStyle } from 'styled-components';

import ffdinFont from '../assets/FontFFDIN/DIN-Medium.ttf';

export default createGlobalStyle`

@font-face {
    font-family:'ffdin Medium', FFDIN, Arial, sans-serif;
    src: local(fontFFDIN), url(${ffdinFont})
}

*{ 
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;    
}
body {
    background-color:#fff;
}

p, input, button {
    font-weight: 400;
}

button {
    cursor: pointer;
}
`;