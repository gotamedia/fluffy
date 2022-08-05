import { InputProps } from "@components/Input"
import React, { PropsWithChildren } from "react"

export type TextProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & InputProps>

export type TextComponent = React.FC<TextProps>

export type ComponentType = TextComponent
