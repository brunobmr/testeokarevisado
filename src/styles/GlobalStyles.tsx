import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Gotham";
  src: url(./fonts/GothamLight.ttf);
}
@font-face {
  font-family: "Gotham Semibold";
  src: url(./fonts/GothamMedium.ttf);
}
@font-face {
  font-family: "Gotham Bold";
  src: url(./fonts/GothamBold.ttf);
}

*{
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: transparent;
    list-style-type: none;
}

:root{
  --black: #121316;
  --black-alt: #1d1d1d;
  --white: #FBFBFB;
  --grey: #adadad;
  --dark-grey: #4c4c4c;
  --Azul-OKA: #003A6E;
  --Oliva-OKA: #73843B;
  --Oliva-Light: #BACE76;
  --Oliva-ALT: #4D5A22;
  --Turquesa-OKA: #00AAC4;
  --Amarelo-OKA: #EBA045;
  --Azul-OKA-Black: #00294D;
}

html{
  font-size: 62.5%; // 10px
}

body{
  position: relative;
}

.flexCenter{
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
}

// span{
//   display: inline;
//   color: inherit !important;
//       -webkit-text-fill-color: inherit !important;
// }

.none{
  display: none;
}

button{
  background-color: transparent;
  border: 0;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

@keyframes delayanimation{
  0%{
    opacity: 0;
    visibility: hidden;
  }
  100%{
    opacity: 1;
    visibility: visible;
  }
}
@keyframes zindexup{
  100%{
    z-index: 50;
  }
}

`;

export default GlobalStyles;
