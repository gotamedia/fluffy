import { css } from 'styled-components'

import buttonVariants from '../Button/variants'

const primary = css`
    ${buttonVariants.primary};
`

const secondary = css`
    ${buttonVariants.secondary};
`

const outline = css`
   ${buttonVariants.outline};
`

export {
    primary,
    secondary,
    outline
}