import Label from "@components/FormSystem/components/Field/Label"
import React, { PropsWithChildren } from "react"

export type StyledFieldProps = {
    width?: string
}

export type FieldProps = PropsWithChildren<{
    validateOnChange?: boolean
} & StyledFieldProps>

export type FieldComponent = React.FC<FieldProps>

export type ComponentType = FieldComponent & {
    Label: typeof Label
}
