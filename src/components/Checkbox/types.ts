import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { Prefix } from '@root/types/prefix'

export const CheckboxVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const
}

export type CheckboxVariant = typeof CheckboxVariants[keyof typeof CheckboxVariants]

export const CheckboxVariantTypes = {
    Default: 'default' as const,
    Contrast: 'contrast' as const,
    HighContrast: 'high-contrast' as const,
    Generic: 'generic' as const
}

export type CheckboxVariantType = typeof CheckboxVariantTypes[keyof typeof CheckboxVariantTypes]

export const CheckboxStates = {
    Default: 'default' as const,
    Error: 'error' as const
}

export type CheckboxState = typeof CheckboxStates[keyof typeof CheckboxStates]

export const CheckboxSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type CheckboxSizeType = typeof CheckboxSizes[keyof typeof CheckboxSizes]

type NativeCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface CheckboxProps extends NativeCheckboxProps {
    size?: CheckboxSizeType,
    variant?: CheckboxVariant,
    variantType?: CheckboxVariantType,
    state?: CheckboxState,
    label?: string,
    indeterminate?: boolean,
    onValueChange?: (value: boolean) => void
}

export type StyledCheckboxProps = Prefix<
    Pick<
        CheckboxProps,
        'size' |
        'variant' |
        'variantType' |
        'state'
    >,
    '$'
>

export type CheckboxRef = HTMLInputElement

export type CheckboxComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>>