import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Rubik'
    }

    * {
        font-family: inherit;
    }
`

export {
    GlobalStyle
}