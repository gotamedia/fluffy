import { css } from 'styled-components'

// TODO: fix more variants and utilise theme for colors
const primary = css`
    border: 1px solid #bbbbbb;
    background: rgb(112 112 112 / 20%);
    
    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 25%);
        }
    }
`

const secondary = css`
    background: rgb(112 112 112 / 20%);

    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 25%);
        }
    }
`

const outline = css`
    border: 1px solid #bbbbbb;

    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 25%);
        }
    }
`

const variants = {
    primary,
    secondary,
    outline
}

export default variants