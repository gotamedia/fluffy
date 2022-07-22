import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const SwitchButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type SwitchButtonSizesType = typeof SwitchButtonSizes
export type SwitchButtonSizeType = SwitchButtonSizesType[keyof SwitchButtonSizesType]

type NativeSwitchButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface SwitchButtonProps extends NativeSwitchButtonProps {
    size?: SwitchButtonSizeType,
    label?: string,
    onValueChange?: (value: boolean) => void
}

export type SwitchButtonRef = HTMLInputElement

export type SwitchButtonComponent = ForwardRefExoticComponent<SwitchButtonProps & RefAttributes<SwitchButtonRef>>