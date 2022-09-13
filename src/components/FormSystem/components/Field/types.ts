import { LabelProps } from "@components/FormSystem/components/Field/DefaultLabel/types"
import Label from "@components/FormSystem/components/Field/Label"
import { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"

export type StyledFieldProps = {
    width?: string
}

export type FieldProps = PropsWithChildren<{
    defaultLabelProps?: LabelProps & { [key: string]: string }
    validateOnChange?: boolean
} & StyledFieldProps & HTMLAttributes<HTMLDivElement>>

export type FieldRef = HTMLDivElement

export type FieldComponent = ForwardRefExoticComponent<FieldProps & RefAttributes<FieldRef>>

export type ComponentType = FieldComponent & {
    Label: typeof Label
}
