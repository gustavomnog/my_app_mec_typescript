
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
     --red: #CA2828;
     --red-dark: #AD1818;
     
     --blue: #334B88;

     --green: #19962D;
     --green-dark: #2D6D3F;
     
     --grey: #474747;
    
     --white: #FFFFFF;
     
     --background: #E5E5E5;
     --background-grey: linear-gradient(360deg, #B4B4B4 0%, #EAEAEA 100%);
     --background-red: linear-gradient(90deg, #AD1818 0%, #741415 100%, #741415 100%)    ;
     --background-white: #FFFFFF;
    }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

body {
      font-size: 16px;
      color: var(--grey);
      background-color: var(--background);

    @media (max-width: 800px) { 
    font-size: 90%;
 }
  }

  body, input, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
  }

  button {
      cursor: pointer;
  }
`

export default GlobalStyles