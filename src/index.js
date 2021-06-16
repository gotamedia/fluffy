import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, ColorMode } from './lib'
import App from './App'

const theme = {}

ReactDOM.render((
    <>
        <ColorMode />

        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
), document.getElementById('root'))