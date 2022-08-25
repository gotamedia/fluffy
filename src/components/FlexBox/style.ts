import styled from "styled-components"
import { StyledFlexBoxProps } from "./types"
import * as Variants from "./variants"

const Wrapper = styled.div<StyledFlexBoxProps>`
    display: flex;
    ${Variants.direction};
    ${(props) => props.$gap ? `gap: ${props.$gap};` : ""}
    
    ${(props) => props.$inline ? undefined : `
        & > * {
            flex-grow: 1;
            ${props.$direction !== "horizontal" ? "" : "width: 0;"}
        }
    `}
`

export {
    Wrapper
}
