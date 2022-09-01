import Label from "@components/FormSystem/components/Field/Label"
import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from "react"

export type StyledFieldProps = {
    width?: string
}

export type FieldProps = PropsWithChildren<{
    validateOnChange?: boolean
} & StyledFieldProps & HTMLAttributes<HTMLDivElement>>

export type FieldRef = HTMLDivElement

export type FieldComponent = React.FC<FieldProps & RefAttributes<FieldRef>>

export type ComponentType = FieldComponent & {
    Label: typeof Label
}
