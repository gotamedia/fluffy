import type {
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode
} from 'react'
import { StyledPrefixThemeProps } from "@root/types/prefix"

export const PillVariants = {
    Success: 'success' as const,
    Alert: 'alert' as const,
    Warning: 'warning' as const,
    Disabled: 'disabled' as const
}

const PillShapes = {
    Round: 'round' as const,
    Rectangle: 'rectangle' as const
}

const PillSizes = {
    Small: 'small' as const,
}

export type  PillVariantsType = typeof  PillVariants
export type  PillVariantType =  PillVariantsType[keyof  PillVariantsType]

type NativeDivProps = HTMLAttributes<HTMLDivElement>

export interface PillProps extends NativeDivProps {
    children?: ReactNode,
    variant?: PillVariantType
    shape?: Lowercase<keyof typeof PillShapes>
    size?: Lowercase<keyof typeof PillSizes>
}

type PillStyledProps = StyledPrefixThemeProps<
    Required<Pick<PillProps, "variant" | "shape" | "size">>
>
export type PillRef = HTMLDivElement

export type PillComponent = ForwardRefExoticComponent<PillProps & RefAttributes<PillRef>>


export {
    PillShapes,
    PillSizes,
    PillStyledProps
}
