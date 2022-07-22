import { css } from 'styled-components'

import { tint } from 'polished'

const sharedStyle = {
    hover: css`
        &:hover {
            background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
        }
    `,
    focus: css`
        &:focus {
            box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
        }
    `,
    disabled: css`
        &:disabled {
            color: #8A8A8D;
            border-color: #DADAD8;
            background-color: #F5F5F5;
        }
    `
}

const primary = css`
    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
    border: 1px solid ${({ theme }) => theme.colors.brand};
    
    ${sharedStyle.hover};
    ${sharedStyle.focus};
    ${sharedStyle.disabled};
`

const secondary = css`
    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};

    ${sharedStyle.hover};
    ${sharedStyle.focus};
    ${sharedStyle.disabled};
`

const outline = css`
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.brand};

    ${sharedStyle.hover};
    ${sharedStyle.focus};
    ${sharedStyle.disabled};
`

const variants = {
    primary,
    secondary,
    outline
}

export default variants