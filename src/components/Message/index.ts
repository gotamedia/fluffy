import BaseComponent from "./Message"
import { ComponentType } from './types'
import { Headline, Text } from "./style"

const Message = BaseComponent as ComponentType

Message.Text = Text
Message.Text.displayName = "Message.Text"
Message.Headline = Headline
Message.Headline.displayName = "Message.Headline"

export default Message
