import { css } from 'styled-components'

import inputVariants from '../Input/variants'

const primary = css`
    ${inputVariants.primary};
`

const secondary = css`
    ${inputVariants.secondary};
`

const outline = css`
    ${inputVariants.outline};
`

const variants = {
    primary,
    secondary,
    outline
}

export default variants