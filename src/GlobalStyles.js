import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGray: #eee;
    --medGray: #353535;
    --darkGray: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem; 
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    color: var(--white);
  }
`
export default GlobalStyles