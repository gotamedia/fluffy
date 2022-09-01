import React, { forwardRef } from "react"
import * as Styled from "./style"
import * as Types from "./types"

const FlexBox: Types.FlexBoxComponent = forwardRef((props, ref) => {
    const { children, direction, gap, inline, ...wrapperProps } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $direction={direction}
            $gap={gap}
            $inline={inline}
            {...wrapperProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

export default FlexBox
