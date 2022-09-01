import styled, { css } from "styled-components"
import { StyledFlexBoxProps } from "./types"
import * as Variants from "./variants"

const Wrapper = styled.div<StyledFlexBoxProps>`
    display: flex;
    ${Variants.direction};
    gap: ${(props) => props.$gap}
    
    ${(props) => props.$inline ? undefined : css`
        & > * {
            flex-grow: 1;
            ${props.$direction !== "horizontal" ? "" : css`width: 0;`}
        }
    `}
`

export {
    Wrapper
}
