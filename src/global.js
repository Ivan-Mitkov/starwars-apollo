import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  @font-face {
  font-family: 'StarWars';
  src: local('StarWars'), url(./fonts/SfDistantGalaxyAltoutline-e2Bp.ttf) format('truetype');
}
  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
   
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  
 
  `;