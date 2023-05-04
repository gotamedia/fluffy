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
            padding-left: 26px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 26px;
        `}
    }
`

const small = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 8px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 34px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 34px;
        `}
    }
`

const normal = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 10px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 42px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 42px;
        `}
    }
`

const big = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 12px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 52px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 52px;
        `}
    }
`

const huge = css<StyledSizeProps>`
    .input-group__icon {
        margin: auto 12px;
    }

    input {
        ${({ $elements }) => $elements.left === 'icon' && css`
            padding-left: 58px;
        `}

        ${({ $elements }) => $elements.right === 'icon' && css`
            padding-right: 58px;
        `}
    }
`

const sizes = {
    tiny,
    small,
    normal,
    big,
    huge
}

export default sizes