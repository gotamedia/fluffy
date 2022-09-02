import { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"
import { DefaultTheme } from "styled-components"
import { Headline, Text } from "./style"

export enum MessageTypes {
    Error = "error",
    Warning = "warning",
    Success = "success",
    Loading = "loading",
    Hint = "hint"
}

export type StyledMessageProps = {
    $type: MessageTypes
    $theme: DefaultTheme
}

export type MessageProps = PropsWithChildren<{
    type: MessageTypes,
} & HTMLAttributes<HTMLDivElement>>

export type MessageRef = HTMLDivElement

export type MessageComponent = ForwardRefExoticComponent<MessageProps & RefAttributes<MessageRef>>

export type ComponentType = MessageComponent & {
    Text: typeof Text
    Headline: typeof Headline
}
