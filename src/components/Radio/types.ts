import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export const RadioSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type RadioSizesType = typeof RadioSizes
export type RadioSizeType = RadioSizesType[keyof RadioSizesType]

type NativeRadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface RadioProps extends NativeRadioProps {
    size?: RadioSizeType,
    label?: string,
    onValueChange?: (value: boolean) => void
}

export type RadioRef = HTMLInputElement

export type RadioComponent = ForwardRefExoticComponent<RadioProps & RefAttributes<RadioRef>>