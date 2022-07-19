import React from 'react'
import { Story, Meta } from '@storybook/react'

import Message from './index'

import * as Types from './types'

export default {
    title: 'Components/Message',
    component: Message,
    argTypes: {
    },
} as Meta<typeof Message>

const Template: Story<Types.MessageProps> = (props) => {
    const {
        type,
        headline,
        text,
        action
    } = props

    return (
        <Message
            type={type}
            headline={headline}
            text={text}
            action={action}
        />
    )
}

export const Basic = Template.bind({})
Basic.args = {
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
