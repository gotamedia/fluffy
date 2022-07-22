import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import { IconType } from '../Icon/types'

export const IconButtonVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const
}


export type IconButtonVariantsType = typeof IconButtonVariants
export type IconButtonVariantType = IconButtonVariantsType[keyof IconButtonVariantsType]

export const IconButtonShapes = {
    Square: 'square' as const,
    Circle: 'circle' as const
}

export type IconButtonShapesType = typeof IconButtonShapes
export type IconButtonShapeType = IconButtonShapesType[keyof IconButtonShapesType]

export const IconButtonSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type IconButtonSizesType = typeof IconButtonSizes
export type IconButtonSizeType = IconButtonSizesType[keyof IconButtonSizesType]

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>

export interface IconButtonProps extends NativeButtonProps {
    icon: IconType,
    size?: IconButtonSizeType,
    variant?: IconButtonVariantType,
    shape?: IconButtonShapeType
}

export type IconButtonRef = HTMLButtonElement

export type IconButtonComponent = ForwardRefExoticComponent<IconButtonProps & RefAttributes<IconButtonRef>>