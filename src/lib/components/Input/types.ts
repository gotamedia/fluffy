import type {
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

export type InputVariants = {
    Primary: 'primary',
    Secondary: 'secondary',
    Outline: 'outline'
}

export type InputSizes = {
    Tiny: 'tiny',
    Small: 'small',
    Normal: 'normal',
    Big: 'big',
    Huge: 'huge'
}

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends NativeInputProps {
    size?: InputSizes[keyof InputSizes],
    variant?: InputVariants[keyof InputVariants]
}

export type InputRef = HTMLInputElement

export type InputComponent = ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>>