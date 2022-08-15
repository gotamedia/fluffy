import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

export const OverlayVariants = {
    Normal: 'normal' as const,
    Dim: 'dim' as const
}

export type OverlayVariantsType = typeof OverlayVariants
export type OverlayVariantType = OverlayVariantsType[keyof OverlayVariantsType]


export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    variant?: OverlayVariantType
}

export type OverlayRef = HTMLDivElement

export type OverlayComponent = ForwardRefExoticComponent<OverlayProps & RefAttributes<OverlayRef>>