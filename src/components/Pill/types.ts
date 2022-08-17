import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'

export const PillVariants = {
    Success: 'success' as const,
    Alert: 'alert' as const,
    Warning: 'warning' as const,
    Disabled: 'disabled' as const
}

export type  PillVariantsType = typeof  PillVariants
export type  PillVariantType =  PillVariantsType[keyof  PillVariantsType]

type NativeDivProps = HTMLAttributes<HTMLDivElement>

export interface PillProps extends NativeDivProps {
    children?: ReactNode,
    variant?: PillVariantType
}

export type PillRef = HTMLDivElement

export type PillComponent = ForwardRefExoticComponent<PillProps & RefAttributes<PillRef>>
