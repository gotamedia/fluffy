import { css } from 'styled-components'

import { shade } from 'polished'

const primary = css`
    &:checked {
        background-color: ${({ theme }) => theme.colors.brand};
        border-color: ${({ theme }) => shade(0.18, theme.colors.brand)};
    }
`

const variants = {
    primary
}

export default variants