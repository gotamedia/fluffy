import { css } from 'styled-components'

import {
    shade,
    tint
} from 'polished'

const sharedStyle = {
    disabled: css`
        color: #8A8A8D;
        background-color: #DADAD8;
    `,
    focus: css`
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    `
}

// TODO: fix more variants and utilise theme for colors
const primary = css`
    color: white;
    background-color: ${({ theme }) => theme.colors.brand};

    &:hover {
        &:not(:disabled) {
            color: white;
            background-color: ${({ theme }) => shade(0.08, theme.colors.brand)};
        }
    }

    &:active {
        &:not(:disabled) {
            color: white;
            background-color: ${({ theme }) => shade(0.18, theme.colors.brand)};
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
    color: ${({ theme }) => theme.colors.brand};
    background-color: white;

    &:hover {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
        }
    }

    &:active {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.82, theme.colors.brand)};
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
    ${secondary};
    
    border: 1px solid currentcolor;

    &:disabled {
        ${sharedStyle.disabled}
        background-color: transparent;
    }
`

const text = css`
    padding: 0;
    color: ${({ theme }) => theme.colors.brand};
    background-color: transparent;

    &:hover {
        &:not(:disabled) {
            text-decoration: underline;
        }
    }

    &:focus {
        ${sharedStyle.focus}
    }

    &:disabled {
        ${sharedStyle.disabled}
        background-color: transparent;
    }
`

export {
    primary,
    secondary,
    outline,
    text
}