import { InputProps } from "@components/Input"
import React, { PropsWithChildren } from "react"

export type TextProps = PropsWithChildren<{
    disabled?: boolean
    filter?: RegExp
    name: string
    readOnly?: boolean
} & InputProps>

export type TextComponent = React.FC<TextProps>

export type ComponentType = TextComponent
