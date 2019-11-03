import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  @font-face {
  font-family: 'SF Distant Galaxy';
  src: url('./fonts/SfDistantGalaxyAltoutline-e2Bp.ttf')  format('truetype');
}

html{
  font-family:  'Roboto','Segoe UI',Helvetica,'SF Distant Galaxy', -apple-system,  Roboto,  Arial, sans-serif;
  
}
  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
   
    height: 100vh;
    margin: 0;
    padding: 0;

    /* @font-face {
     font-family: 'StarWars';
      src: local('SfDistantGalaxyAltoutline-e2Bp');
      src: url("./fonts/SfDistantGalaxyAltoutline-e2Bp.ttf") format('truetype');
      font-display: fallback
  } */
    transition: all 0.25s linear;
  }

  
 
  `;
