import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const CheckboxVariants = {
    Primary: 'primary' as const
}

export type CheckboxVariant = typeof CheckboxVariants[keyof typeof CheckboxVariants]

export const CheckboxVariantTypes = {
    Default: 'default' as const,
    HighContrast: 'high-contrast' as const
}

export type CheckboxVariantType = typeof CheckboxVariantTypes[keyof typeof CheckboxVariantTypes]

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
    label?: string,
    indeterminate?: boolean,
    onValueChange?: (value: boolean) => void
}

export type CheckboxRef = HTMLInputElement

export type CheckboxComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>>