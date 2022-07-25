import Icon, { Icons } from "@components/Icon"
import useTheme from "@hooks/useTheme"
import React from "react"
import { Button } from "../../index"
import * as Styled from './style'
import * as Types from './types'

const Message: Types.MessageComponent = (props) => {
    const {
        type,
        headline,
        text,
        action
    } = props

    const theme = useTheme()

    return (
        <Styled.Wrapper $type={type} $theme={theme}>
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
}

export default Message
