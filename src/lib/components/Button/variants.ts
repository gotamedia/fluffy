import { css } from 'styled-components'

// TODO: fix more variants and utilise theme for colors
const primary = css`
    color: black;
    background-color: #dedede;

    &:hover {
        &:not(:disabled) {
            color: white;
            background-color: #6a6a6a;
        }
    }
`

const secondary = css`
    color: black;
    background-color: transparent;

    &:hover {
        &:not(:disabled) {
            background-color: rgb(106 106 106 / 30%);
        }
    }
`

const outline = css`
    ${secondary};
    border: 1px solid currentcolor;
`

const text = css`
    padding: 0;
    color: black;
    background-color: transparent;

    &:hover {
        &:not(:disabled) {
            text-decoration: underline;
        }
    }
`

export {
    primary,
    secondary,
    outline,
    text
}