import { css } from "styled-components"
import { StyledValidationMessageProps } from "../types"
import * as Types from "../../../../types"

const typeVariants = css<StyledValidationMessageProps>`
    ${({ $type, $theme }) => {
        switch($type) {
            case Types.Validation.Types.Error:
                return css`
                    color: ${$theme.colors.alert.error.text};
                `
            case Types.Validation.Types.Warning:
                return css`
                    color: ${$theme.colors.alert.warning.text};
                `
            case Types.Validation.Types.Success:
                return css`
                    color: ${$theme.colors.alert.success.text};
                `
            default:
            case Types.Validation.Types.Hint:
                return css`
                    color: ${$theme.colors.alert.hint.text};
                `
        }
    }}
`

export {
    typeVariants
}
