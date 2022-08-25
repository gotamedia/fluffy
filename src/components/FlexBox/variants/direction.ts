import { css } from "styled-components"
import { StyledFlexBoxProps } from "../types"

const directionVariants = css<StyledFlexBoxProps>`
    ${({ $direction }) => {
    switch($direction) {
        case 'vertical':
            return css`
                flex-direction: column;
            `
        default:
        case 'horizontal':
            return css`
                flex-direction: row;
            `
    }
}}
`

export {
    directionVariants
}
