import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.grayDarker};
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
