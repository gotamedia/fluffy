import React from "react"

export interface TextProps {
    name: string
}

export type TextComponent = React.FC<TextProps>

export type ComponentType = TextComponent
