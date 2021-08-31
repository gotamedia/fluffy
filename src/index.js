import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, ColorMode } from './lib'
import App from './App'

const theme = {}

const Application = (
    <>
        <ColorMode />

        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
)

ReactDOM.render(Application, document.getElementById('root'))