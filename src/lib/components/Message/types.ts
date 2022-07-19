import React, { FC, PropsWithChildren } from "react"
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
}>

export type MessageComponent = FC<MessageProps>

export type ComponentType = MessageComponent
