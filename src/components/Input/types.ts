import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { Prefix } from '@root/types/prefix'

export const InputVariants = {
    Primary: 'primary' as const
}

export type InputVariant = typeof InputVariants[keyof typeof InputVariants]

export const InputVariantTypes = {
    Default: 'default' as const,
    Generic: 'generic' as const
}

export type InputVariantType = typeof InputVariantTypes[keyof typeof InputVariantTypes]

export const InputStates = {
    Default: 'default' as const,
    Error: 'error' as const
}

export type InputState = typeof InputStates[keyof typeof InputStates]

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
    variant?: InputVariant,
    variantType?: InputVariantType,
    state?: InputState,
    onValueChange?: (value: string) => void,
    label?: string
}

export type StyledInputProps = Prefix<
    Pick<
        InputProps,
        'size' |
        'variant' |
        'variantType' |
        'state'
    >,
    '$'
>

export type InputRef = HTMLInputElement

export type InputComponent<P = {}> = ForwardRefExoticComponent<P & InputProps & RefAttributes<InputRef>>