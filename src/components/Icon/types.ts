import type {
    ComponentProps,
    MouseEventHandler,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import IconNames from './iconNames'

export const Icons = IconNames

export type Icon = typeof Icons[keyof typeof Icons]

export const IconSizes = {
    Micro: 'micro' as const,
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const,
}

export type IconSizesType = typeof IconSizes
export type IconSizeType = IconSizesType[keyof IconSizesType]

export const IconVariants = {
    Mini: 'mini' as const,
    Outline: 'outline' as const,
    Solid: 'solid' as const
}

export type IconVariantsType = typeof IconVariants
export type IconVariantType = IconVariantsType[keyof IconVariantsType]

export type IconProps = Omit<ComponentProps<'svg'>, 'onClick' | 'ref'> & {
    icon: Icon,
    variant?: IconVariantType,
    spin?: boolean,
    size?: IconSizeType,
    onClick?: MouseEventHandler<HTMLElement>
}

export type IconRef = HTMLSpanElement

export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<IconRef>>
