import useTheme from "@hooks/useTheme"
import React, { forwardRef } from "react"
import * as Styled from './style'
import * as Types from './types'

const Message: Types.MessageComponent = forwardRef((props, ref) => {
    const {
        children,
        type,
        ...wrapperProps
    } = props

    const theme = useTheme()

    return (
        <Styled.Wrapper
            ref={ref}
            $type={type}
            $theme={theme}
            {...wrapperProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

export default Message
