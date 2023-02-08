import { css } from 'styled-components'

import buttonVariants from '../Button/variants'

const primary = css`
    ${buttonVariants.primary};
`

const secondary = css`
    ${buttonVariants.secondary};
`

const contrast = css`
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
    outline,
    contrast
}

export default variants