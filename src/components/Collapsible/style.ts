import styled from "styled-components"
import * as Types from "./types"

const Wrapper = styled.div<Types.CollapsibleWrapperStyed>(
    ({ height }) => ({
        height,
    }),
    `
    overflow: hidden;
    transition: height 200ms;
`
)
const InnerWrapper = styled("div")``

export { Wrapper, InnerWrapper }
