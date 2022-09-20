import { StyledPrefixThemeProps } from "@root/types/prefix"
import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    RefAttributes
} from 'react'
import {
    PillShapes,
    PillSizes,
    PillVariants
} from "./constants"

export type PillVariantsType = typeof  PillVariants
export type PillVariantType = PillVariantsType[keyof  PillVariantsType]

type NativeDivProps = HTMLAttributes<HTMLDivElement>

export interface PillProps extends NativeDivProps {
    children?: ReactNode,
    variant?: PillVariantType
    shape?: Lowercase<keyof typeof PillShapes>
    size?: Lowercase<keyof typeof PillSizes>
}

type PillStyledProps = StyledPrefixThemeProps<Pick<PillProps, "variant" | "shape" | "size">>

export type PillRef = HTMLDivElement

export type PillComponent = ForwardRefExoticComponent<PillProps & RefAttributes<PillRef>>


export {
    PillStyledProps
}
