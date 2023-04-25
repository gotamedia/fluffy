import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { Prefix } from '@root/types/prefix'

import { Icon } from '../Icon/types'

export const IconButtonVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    Contrast: 'contrast' as const
}


export type IconButtonVariant = typeof IconButtonVariants[keyof typeof IconButtonVariants]

export const IconButtonVariantTypes = {
    Default: 'default' as const,
    Contrast: 'contrast' as const,
    HighContrast: 'high-contrast' as const,
    Generic: 'generic' as const,
    Link: 'link' as const
}

export type IconButtonVariantType = typeof IconButtonVariantTypes[keyof typeof IconButtonVariantTypes]

export const IconButtonShapes = {
    Square: 'square' as const,
    Circle: 'circle' as const
}

export type IconButtonShape = typeof IconButtonShapes[keyof typeof IconButtonShapes]

export const IconButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type IconButtonSize = typeof IconButtonSizes[keyof typeof IconButtonSizes]

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export interface IconButtonProps extends NativeButtonProps {
    icon: Icon,
    size?: IconButtonSize,
    variant?: IconButtonVariant,
    variantType?: IconButtonVariantType,
    shape?: IconButtonShape
}

export type StyledIconButtonProps = Prefix<
    Pick<
    IconButtonProps,
        'size' |
        'variant' |
        'variantType' |
        'shape'
    >,
    '$'
>

export type IconButtonRef = HTMLButtonElement

export type IconButtonComponent = ForwardRefExoticComponent<IconButtonProps & RefAttributes<IconButtonRef>>