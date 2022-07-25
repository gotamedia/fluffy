import styled from "styled-components"
import { StyledGroupProps } from "./types"
import * as Variants from "./variants"

const Group = styled.div<StyledGroupProps>`
    display: flex;
    ${Variants.direction};
    gap: 16px;
    
    ${(props) => props.inline ? undefined : `
        & > * {
            flex-grow: 1;
            ${props.$direction !== "horizontal" ? "" : "width: 0;"}
        }
    `}
    ${(props) => !props.width ? "" : `width: ${props.width}`}
`

export {
    Group
}
