import { css } from "styled-components"
import { StyledSwitchProps } from "../types"

const invalidVariants = css<StyledSwitchProps>`
    ${({ $invalid}) => {
        console.log("invalid", $invalid)
        if ($invalid) {
            return css`
                box-shadow: 0 0 0 3px red;
            `
        }
    }
}}
`

export {
    invalidVariants
}
