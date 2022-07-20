import { ForwardRefExoticComponent, InputHTMLAttributes, RefAttributes } from "react"

export const SwitchSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type SwitchSizesType = typeof SwitchSizes
export type SwitchSizeType = SwitchSizesType[keyof SwitchSizesType]

export interface StyledSwitchProps {
    $disabled?: boolean,
    $invalid?: boolean,
    $size?: SwitchSizeType
}

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface SwitchProps extends NativeInputProps {
    invalid?: boolean,
    label?: string,
    onValueChange?: (value: boolean) => void,
    size?: SwitchSizeType
}

export type SwitchRef = HTMLInputElement

export type SwitchComponent = ForwardRefExoticComponent<SwitchProps & RefAttributes<SwitchRef>>
