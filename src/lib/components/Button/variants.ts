import { css } from 'styled-components'

const primary = css`
    color: white;
    background-color: #507748;

    &:hover {
        &:not(:disabled) {
            background-color: #43643c;
        }
    }
`

const secondary = css`
    color: #43643c;
    background-color: transparent;

    &:hover {
        &:not(:disabled) {
            background-color: rgb(80 119 72 / 29%);
        }
    }
`

const outline = css`
    ${secondary};
    border: 1px solid currentcolor;
`

const text = css`
    padding: 0;
    color: #43643c;
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