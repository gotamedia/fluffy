import { css } from 'styled-components'

import buttonVariants from '../Button/variants'

const primary = css`
    ${buttonVariants.primary};
`

const secondary = css`
    ${buttonVariants.secondary};
`

const secondaryDark = css`
    ${buttonVariants.secondary};
    color: ${({ theme }) => theme.colors.grey[0]};
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.grey[0]};
`

const contrast = css`
    ${secondaryDark};
    background-color: #fff;
    &:focus {
        box-shadow: none;
    }

`

const outline = css`
   ${buttonVariants.outline};
`

const variants = {
    primary,
    secondary,
    secondaryDark,
    outline,
    contrast
}

export default variants