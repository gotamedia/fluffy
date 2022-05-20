import type {
    ButtonHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

export const ButtonGroupVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const,
    Text: 'text' as const
}

export type ButtonGroupVariantsType = typeof ButtonGroupVariants
export type ButtonGroupVariantType = ButtonGroupVariantsType[keyof ButtonGroupVariantsType]

export const ButtonGroupSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type ButtonGroupSizesType = typeof ButtonGroupSizes
export type ButtonGroupSizeType = ButtonGroupSizesType[keyof ButtonGroupSizesType]

type NativeButtonGroupProps = Omit<ButtonHTMLAttributes<HTMLDivElement>, 'size'>

export interface ButtonGroupProps extends NativeButtonGroupProps {
    children?: ReactNode,
    size?: ButtonGroupSizeType,
    variant?: ButtonGroupVariantType
}

export type ButtonGroupRef = HTMLDivElement

export type ButtonGroupComponent = ForwardRefExoticComponent<ButtonGroupProps & RefAttributes<ButtonGroupRef>>