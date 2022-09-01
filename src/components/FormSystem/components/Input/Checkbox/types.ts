import { CheckboxProps as PlainCheckboxProps, CheckboxRef } from "@components/Checkbox"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type CheckboxProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & PlainCheckboxProps>

export type CheckboxComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>>

export type ComponentType = CheckboxComponent
