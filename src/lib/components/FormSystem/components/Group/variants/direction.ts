import { css } from "styled-components"
import { StyledGroupProps } from "../types"

const directionVariants = css<StyledGroupProps>`
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
