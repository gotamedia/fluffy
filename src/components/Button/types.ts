import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

export const ButtonVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    Text: 'text' as const
}

export type ButtonVariantsType = typeof ButtonVariants
export type ButtonVariantType = ButtonVariantsType[keyof ButtonVariantsType]

export const ButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type ButtonSizesType = typeof ButtonSizes
export type ButtonSizeType = ButtonSizesType[keyof ButtonSizesType]

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export interface ButtonProps extends NativeButtonProps {
    children?: ReactNode,
    size?: ButtonSizeType,
    variant?: ButtonVariantType
}

export type ButtonRef = HTMLButtonElement

export type ButtonComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>>