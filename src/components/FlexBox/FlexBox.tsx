import React from "react"
import * as Styled from "./style"
import * as Types from "./types"

const FlexBox: Types.FlexBoxComponent = (props) => {
    const { children, direction, gap, inline, ...wrapperProps } = props

    return (
        <Styled.Wrapper $direction={direction} $gap={gap} $inline={inline} {...wrapperProps}>
            {children}
        </Styled.Wrapper>
    )
}

export default FlexBox
