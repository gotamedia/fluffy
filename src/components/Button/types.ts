import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

import type { Prefix } from '@root/types/prefix'

export const ButtonVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    OutlineTransparent: 'outlineTransparent' as const,
    Text: 'text' as const
}

export type ButtonVariant = typeof ButtonVariants[keyof typeof ButtonVariants]

export const ButtonVariantTypes = {
    Default: 'default' as const,
    Contrast: 'contrast' as const,
    HighContrast: 'high-contrast' as const,
    Generic: 'generic' as const,
    Link: 'link' as const
}

export type ButtonVariantType = typeof ButtonVariantTypes[keyof typeof ButtonVariantTypes]

export const ButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type ButtonSize = typeof ButtonSizes[keyof typeof ButtonSizes]

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export interface ButtonProps extends NativeButtonProps {
    children?: ReactNode,
    size?: ButtonSize,
    variant?: ButtonVariant
    variantType?: ButtonVariantType
}

export type StyledCheckboxProps = Prefix<
    Pick<
    ButtonProps,
        'size' |
        'variant' |
        'variantType'
    >,
    '$'
>

export type ButtonRef = HTMLButtonElement

export type ButtonComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>>