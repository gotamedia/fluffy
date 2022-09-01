import { RadioProps } from "@components/Radio"
import React, { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type onChange = (
    optionOnChange: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
) => (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
) => void

export interface RadioGroupOption extends RadioProps {
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

export type RadioGroupRef = HTMLDivElement

export type RadioGroupComponent = ForwardRefExoticComponent<RadioGroupProps & RefAttributes<HTMLDivElement>>

export type ComponentType = RadioGroupComponent
