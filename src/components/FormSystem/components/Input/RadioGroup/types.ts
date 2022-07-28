import { RadioProps } from "@components/Radio"
import React, { PropsWithChildren } from "react"

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

export type RadioGroupComponent = React.FC<RadioGroupProps>

export type ComponentType = RadioGroupComponent
