import styled from "styled-components"
import { StyledFieldProps } from "./types"

const Wrapper = styled.div<StyledFieldProps>`
    display: flex;
    flex-direction: column;
    ${(props) => !props.width ? "" : `width: ${props.width}`}
`

export {
    Wrapper
}
