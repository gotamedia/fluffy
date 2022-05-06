import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

export type ButtonVariants = {
    Primary: 'primary',
    Secondary: 'secondary',
    Outline: 'outline',
    Text: 'text'
}

export type ButtonSizes = {
    Tiny: 'tiny',
    Small: 'small',
    Normal: 'normal',
    Big: 'big',
    Huge: 'huge'
}

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export interface ButtonProps extends NativeButtonProps {
    children?: ReactNode,
    size?: ButtonSizes[keyof ButtonSizes],
    variant?: ButtonVariants[keyof ButtonVariants]
}

export type ButtonRef = HTMLButtonElement

export type ButtonComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>>