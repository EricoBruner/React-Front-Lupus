import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #25262D;
    -webkit-font-smothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif
  }
`