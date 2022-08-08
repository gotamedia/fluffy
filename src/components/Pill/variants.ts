import { css } from 'styled-components'

// TODO: fix more variants and utilise theme for colors
const success = css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pill.success};
    border-color: ${({ theme }) => theme.colors.pill.success};
`

const alert = css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pill.alert};
    border-color: ${({ theme }) => theme.colors.pill.alert};
`

const warning = css`
    color: ${({ theme }) => theme.colors.grey[0]};
    background-color: ${({ theme }) => theme.colors.pill.warning};
    border-color: ${({ theme }) => theme.colors.pill.warning};
`

const disabled = css`
    color: ${({ theme }) => theme.colors.grey[2]};
    background-color: ${({ theme }) => theme.colors.pill.disabled};
    border-color: ${({ theme }) => theme.colors.pill.disabled};
`

export {
    alert,
    success,
    disabled,
    warning
}