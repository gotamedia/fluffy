import { TextareaProps as PlainTextareaProps, TextareaRef } from "@components/Textarea"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type TextareaProps = PropsWithChildren<{
    disabled?: boolean
    filter?: RegExp
    name: string
    readOnly?: boolean
} & PlainTextareaProps>

export type TextareaComponent = ForwardRefExoticComponent<TextareaProps & RefAttributes<TextareaRef>>

export type ComponentType = TextareaComponent
