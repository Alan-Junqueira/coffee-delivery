import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto';
  }

  ul{
    list-style: none;
  }

  input, button {
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    height: 100%;

    -webkit-font-smoothing: antialiased
  }
`;
