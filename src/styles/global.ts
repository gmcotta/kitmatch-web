import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to bottom left, #F0F0F5, #D3D0FD);
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background-size: contain;
    overflow: scroll;

    @media (max-width: 425px) {
      height: 100%;
    }
  }

  body, input, button {
    font: 16px 'Montserrat', sans-serif;
  }
`;
