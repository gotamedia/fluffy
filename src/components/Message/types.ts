import React, { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"
import { DefaultTheme } from "styled-components"

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
    headline?: string,
    text?: string,
    action?: {
        text: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
        loading?: boolean
        disabled?: boolean
    }
} & HTMLAttributes<HTMLDivElement>>

export type MessageRef = HTMLDivElement

export type MessageComponent = ForwardRefExoticComponent<MessageProps & RefAttributes<MessageRef>>

export type ComponentType = MessageComponent
