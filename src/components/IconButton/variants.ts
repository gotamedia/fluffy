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

const variants = {
    primary,
    secondary,
    outline
}

export default variants