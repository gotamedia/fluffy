import { css } from 'styled-components'

import buttonVariants from '../Button/variants'

const primary = css`
    ${buttonVariants.primary};
`

const secondary = css`
    ${buttonVariants.secondary};
`

const contrast = css`
    ${buttonVariants.outlineTransparent};
    background-color: #fff;
    &:focus {
        box-shadow: none;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.grey[4]};
        border-color: ${({ theme }) => theme.colors.grey[4]};
    }

`

const outline = css`
   ${buttonVariants.outline};
`

const variants = {
    primary,
    secondary,
    outline,
    contrast
}

export default variants