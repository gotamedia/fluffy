import styled from "styled-components"
import { StyledGroupProps } from "./types"
import * as Variants from "./variants"

const Group = styled.div<StyledGroupProps>`
    display: flex;
    ${Variants.direction};
`

export {
    Group
}
