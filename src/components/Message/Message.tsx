import Icon, { Icons } from "@components/Icon"
import useTheme from "@hooks/useTheme"
import React, { forwardRef } from "react"
import { Button } from "../../index"
import * as Styled from './style'
import * as Types from './types'

const Message: Types.MessageComponent = forwardRef((props, ref) => {
    const {
        type,
        headline,
        text,
        action,
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
            {headline && (<Styled.Headline>{headline}</Styled.Headline>)}
            {text && (<Styled.Text>{text}</Styled.Text>)}
            {action && (
                <Button
                    onClick={action.onClick}
                    disabled={action.disabled}
                >
                    {action.loading && (
                        <Icon icon={Icons.Spinner} />
                    )}
                    {action.text}
                </Button>
            )}
        </Styled.Wrapper>
    )
})

export default Message
