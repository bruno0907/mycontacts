import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: ${({ theme }) => theme.fontSize.text};
    color: ${({ theme }) => theme.text}
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


`;
