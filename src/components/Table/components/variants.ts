import { css } from "styled-components"

const primary = css`
    color: ${({ theme }) => theme.colors.grey[0]};
    background-color: ${({ theme }) => theme.colors.white};
`

const secondary = css`
    color: ${({ theme }) => theme.colors.grey[1]};
    background-color: ${({ theme }) => theme.colors.grey[5]};
`

const tertiary = css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey[0]};
`

export { primary, secondary, tertiary }
