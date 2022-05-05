import type {
    DetailedHTMLProps,
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode,
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

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    children?: ReactNode,
    size?: ButtonSizes[keyof ButtonSizes],
    variant?: ButtonVariants[keyof ButtonVariants]
}

export type ButtonRef = HTMLButtonElement

export type ButtonComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>>