import { css } from 'styled-components'

type StyledSizeProps = {
    $elements: {
        left: string,
        right: string
    }
}

const tiny = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 6px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 30px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 30px;
        `}
    }
`

const small = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 8px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 35px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 35px;
        `}
    }
`

const normal = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 10px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 50px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 50px;
        `}
    }
`

const big = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 12px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 60px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 60px;
        `}
    }
`

const huge = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 12px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 65px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 65px;
        `}
    }
`

export {
    tiny,
    small,
    normal,
    big,
    huge
}