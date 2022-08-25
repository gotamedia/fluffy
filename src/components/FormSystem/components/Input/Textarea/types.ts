import React, { PropsWithChildren } from "react"

import { TextareaProps as PlainTextareaProps } from "@components/Textarea"

export type TextareaProps = PropsWithChildren<{
    disabled?: boolean
    filter?: RegExp
    name: string
    readOnly?: boolean
} & PlainTextareaProps>

export type TextareaComponent = React.FC<TextareaProps>

export type ComponentType = TextareaComponent
