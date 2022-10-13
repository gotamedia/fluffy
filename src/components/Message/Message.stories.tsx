import { Story, Meta } from '@storybook/react'
import { Button } from "../../index"

import Message from './index'

import * as Types from './types'

export default {
    title: 'Components/Message',
    component: Message,
    argTypes: {
    },
} as Meta<typeof Message>

const Template: Story<
    Types.MessageProps &
    { headline: string, text: string, action: { text: string, onClick: () => void }}
> = (props) => {
    const {
        action,
        headline,
        text,
        type
    } = props

    return (
        <Message type={type}>
            <Message.Headline>
                {headline}
            </Message.Headline>

            <Message.Text>
                {text}
            </Message.Text>

            <Button onClick={action.onClick}>
                {action.text}
            </Button>
        </Message>
    )
}

export const BasicStory = Template.bind({})
BasicStory.args = {
    type: Types.MessageTypes.Error,
    headline: "This is a message",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    action: {
        text: "Click me",
        onClick: () => {
            console.log("Message button clicked")
        }
    }
}
