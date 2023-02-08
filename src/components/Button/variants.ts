import { css } from 'styled-components'

import {
    shade,
    tint
} from 'polished'

const sharedStyle = {
    disabled: css`
        &:disabled {
            color: #8A8A8D;
            background-color: #DADAD8;
        }
    `,
    focus: css`
        &:focus {
            box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
        }
    `
}

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

    ${sharedStyle.focus};
    ${sharedStyle.disabled};
`

const secondary = css`
    color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};

    &:hover {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.88, theme.colors.brand)};
        }
    }

    &:active {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.82, theme.colors.brand)};
        }
    }

    ${sharedStyle.focus};
    ${sharedStyle.disabled};
`

const outline = css`
    ${secondary};

    background-color: white;
    
    border: 1px solid currentcolor;

    ${sharedStyle.disabled};

    &:disabled {
        background-color: transparent;
    }
`

const outlineTransparent = css`
    color: ${({ theme }) => theme.colors.grey[0]};
    background-color: transparent;
    border-radius: 2px;
    &:hover {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.82, theme.colors.grey[0])};
        }
    }

    &:active {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.87, theme.colors.grey[0])};
        }
    }

    ${sharedStyle.focus};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.grey[0]};

    ${sharedStyle.disabled};

    &:disabled {
        background-color: transparent;
        border-color: #8A8A8D;
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

    ${sharedStyle.focus};
    ${sharedStyle.disabled};

    &:disabled {
        background-color: transparent;
    }
`

const variants = {
    primary,
    secondary,
    outline,
    outlineTransparent,
    text
}

export {
    sharedStyle
}

export default variants