import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const CheckboxSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type CheckboxSizesType = typeof CheckboxSizes
export type CheckboxSizeType = CheckboxSizesType[keyof CheckboxSizesType]

type NativeCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface CheckboxProps extends NativeCheckboxProps {
    size?: CheckboxSizeType,
    label?: string,
    onValueChange?: (value: boolean) => void
}

export type CheckboxRef = HTMLInputElement

export type CheckboxComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>>