import styled from "styled-components"
import type { StyledFieldProps } from "./types"

const Wrapper = styled.div<StyledFieldProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width}
`

export {
    Wrapper
}
