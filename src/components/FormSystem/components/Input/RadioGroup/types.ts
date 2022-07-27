import { RadioProps } from "@components/Radio"
import React, { PropsWithChildren } from "react"

export interface RadioGroupOption extends Omit<RadioProps, "checked" | "label" | "onClick" | "value"> {
    label: string
    value: string
}

export type RadioGroupProps = PropsWithChildren<{
    allowDeselect?: boolean
    disabled?: boolean
    name: string
    options: RadioGroupOption[]
    readOnly?: boolean
}>

export type RadioGroupComponent = React.FC<RadioGroupProps>

export type ComponentType = RadioGroupComponent
