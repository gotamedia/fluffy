import { InputProps, InputRef } from "@components/Input"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type TextProps = PropsWithChildren<{
    disabled?: boolean
    filter?: RegExp
    name: string
    readOnly?: boolean
} & InputProps>

export type TextComponent = ForwardRefExoticComponent<TextProps & RefAttributes<InputRef>>

export type ComponentType = TextComponent
