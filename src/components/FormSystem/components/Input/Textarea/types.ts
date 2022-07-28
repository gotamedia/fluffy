import React, { PropsWithChildren } from "react"

import { TextareaProps as PlainTextareaProps } from "@components/Textarea"

export type TextareaProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & PlainTextareaProps>

export type TextareaComponent = React.FC<TextareaProps>

export type ComponentType = TextareaComponent
