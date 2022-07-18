import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const InputVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const
}

export type InputVariantsType = typeof InputVariants
export type InputVariantType = InputVariantsType[keyof InputVariantsType]

export const InputSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type InputSizesType = typeof InputSizes
export type InputSizeType = InputSizesType[keyof InputSizesType]

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends NativeInputProps {
    size?: InputSizeType,
    variant?: InputVariantType,
    onValueChange?: (value: string) => void,
    label?: string
}

export type InputRef = HTMLInputElement

export type InputComponent = ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>>