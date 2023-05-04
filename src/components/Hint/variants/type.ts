import { css } from "styled-components"
import { HintTypes, StyledHintProps } from "../types"

const typeVariants = css<StyledHintProps>`
    ${({ $type, theme }) => {
        switch($type) {
            case HintTypes.Error:
                return css`
                    color: ${theme.colors.alert.error.text};
                `
            case HintTypes.Warning:
                return css`
                    color: ${theme.colors.alert.warning.text};
                `
            case HintTypes.Success:
                return css`
                    color: ${theme.colors.alert.success.text};
                `
            case HintTypes.Loading:
                return css`
                    color: ${theme.colors.alert.loading.text};
                `
            default:
            case HintTypes.Info:
                return css`
                    color: ${theme.colors.alert.hint.text};
                `
        }
    }}
`

export {
    typeVariants
}
