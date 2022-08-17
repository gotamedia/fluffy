import { css } from 'styled-components'

const normal = css<{ $hasIcon: boolean }>`
    padding-left: 20px;

    ${({ $hasIcon }) => $hasIcon && css`
        padding-left: 40px;
    `}
`

const select = css<{ $hasIcon: boolean }>`
    padding-left: 40px;

    ${({ $hasIcon }) => $hasIcon && css`
        padding-left: 70px;
    `}
`

const types = {
    normal,
    select
}

export default types