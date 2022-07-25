import { css } from "styled-components"
import * as Types from "../types"
import { StyledMessageProps } from "../types"

const typeVariants = css<StyledMessageProps>`
    ${({ $type, $theme }) => {
        switch($type) {
            case Types.MessageTypes.Error:
                return css`
                    color: ${$theme.colors.alert.error.text};
                    background-color: ${$theme.colors.alert.error.background};
                    border-color: ${$theme.colors.alert.error.border};
                `
            case Types.MessageTypes.Warning:
                return css`
                    color: ${$theme.colors.alert.warning.text};
                    background-color: ${$theme.colors.alert.warning.background};
                    border-color: ${$theme.colors.alert.warning.border};
                `
            case Types.MessageTypes.Success:
                return css`
                    color: ${$theme.colors.alert.success.text};
                    background-color: ${$theme.colors.alert.success.background};
                    border-color: ${$theme.colors.alert.success.border};
                `
            case Types.MessageTypes.Loading:
                return css`
                    color: ${$theme.colors.alert.loading.text};
                    background-color: ${$theme.colors.alert.loading.background};
                    border-color: ${$theme.colors.alert.loading.border};
                `
            default:
            case Types.MessageTypes.Hint:
                return css`
                    color: ${$theme.colors.alert.hint.text};
                    background-color: ${$theme.colors.alert.hint.background};
                    border-color: ${$theme.colors.alert.hint.border};
                `
        }
    }}
`

export {
    typeVariants
}
