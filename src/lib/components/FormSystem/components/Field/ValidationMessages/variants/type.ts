import { css } from "styled-components"
import { StyledValidationMessageProps } from "../types"
import * as Types from "../../../../types"

const typeVariants = css<StyledValidationMessageProps>`
    ${({ $type }) => {
        // TODO theme colors
        switch($type) {
            case Types.Validation.Types.Warning:
                return css`
                    color: #ffaa00;
                `
            default:
            case Types.Validation.Types.Error:
                return css`
                    color: #df0000;
                `
        }
    }}
`

export {
    typeVariants
}
