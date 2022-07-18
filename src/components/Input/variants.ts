import { css } from 'styled-components'

const sharedStyle = {
    disabled: css`
        color: #8A8A8D;
        border-color: #DADAD8;
        background-color: #F5F5F5;
    `,
    focus: css`
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    `
}

// TODO: fix more variants and utilise theme for colors
const primary = css`
    border: 1px solid #bbbbbb;
    background: rgb(112 112 112 / 10%);
    
    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 20%);
        }
    }

     &:focus {
        ${sharedStyle.focus}
    }

    &:disabled {
        ${sharedStyle.disabled}
    }
`

const secondary = css`
    background: rgb(112 112 112 / 10%);

    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 20%);
        }
    }

     &:focus {
        ${sharedStyle.focus}
    }

    &:disabled {
        ${sharedStyle.disabled}
    }
`

const outline = css`
    border: 1px solid #bbbbbb;

    &:hover {
        &:not(:disabled) {
            background: rgb(112 112 112 / 20%);
        }
    }

     &:focus {
        ${sharedStyle.focus}
    }

    &:disabled {
        ${sharedStyle.disabled}
    }
`

export {
    primary,
    secondary,
    outline
}