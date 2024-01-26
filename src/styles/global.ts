import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors['base-hover']};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['base-button']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
  }

  button {
    &:enabled {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
