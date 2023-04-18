import { css } from 'styled-components'

const defaultState = {
    wrapper: css`

    `,
    element: css`
    
    `,
    input: css`
    
    `
}

type ErrorStyledProps = {
    $elements: {
        left: string,
        right: string
    }
}

const error = {
    wrapper: css`
        && {
            color: #FF0000;
        }
    `,
    element: css`
        &--left {
            border-color: #FF0000;
            border-style: solid;
            border-width: 1px 0 1px 1px;
        }

        &--right {
            border-color: #FF0000;
            border-style: solid;
            border-width: 1px 1px 1px 0px;
        }
    `,
    input: css<ErrorStyledProps>`
        ${({ $elements }) => $elements.left === 'element' && css`
            border-left: 0;
        `}

        ${({ $elements }) => $elements.right === 'element' && css`
            border-right: 0;
        `}
    `
}

const states = {
    default: defaultState,
    error: error
}

export default states