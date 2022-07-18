import { css } from 'styled-components'

const primary = css`

`

const secondary = css`
    .input-group {
        &__element {
            &.input-group {
                &--left {
                    border-right: 1px solid currentColor;
                }

                &--right {
                    border-left: 1px solid currentColor;
                }
            }
        }
    }
`

const outline = css`

`

const variants = {
    primary,
    secondary,
    outline
}

export default variants