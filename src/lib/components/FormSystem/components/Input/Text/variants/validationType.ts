import { css } from "styled-components"
import { StyledTextProps } from "../types"

const validationTypeVariants = css<StyledTextProps>`
    ${({ validationType, $theme }) => {
    return css`
        background-color: ${$theme.colors.alert[validationType || "hint"]?.background};
        border-color: ${$theme.colors.alert[validationType || "hint"]?.border};
        color: ${$theme.colors.alert[validationType || "hint"]?.border};

        &:hover {
            &:not(:disabled):not(:read-only) {
                border-color: ${$theme.colors.alert[validationType || "hint"]?.text};
            }
        }
    
        &:focus {
            color: ${$theme.colors.alert[validationType || "hint"]?.text};
            border-color: ${$theme.colors.alert[validationType || "hint"]?.text};
            background-color: initial;
        }
    `
    }
}}
`

export {
    validationTypeVariants
}
