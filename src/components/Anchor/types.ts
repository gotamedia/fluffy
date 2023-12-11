import type {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

import type { AnchorRect } from '@hooks/useAnchor/types'
import type { StyledInterpolationFunction } from "@root/types/interpolationFunction"
import type { StyledPrefixThemeProps } from "@root/types/prefix"

interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
    anchor?: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    },
    forceDirection?: boolean,
    withFocusTrap?: boolean,
    withPointer?: boolean
    backgroundColor?: string
    alignment?: Align
    fixedHeight?: number
}

export enum Align {
    Top = "Top",
    Bottom = "Bottom"
}

type AnchorStyledProps = StyledPrefixThemeProps<Pick<AnchorRect, "pointer">> & {
    $backgroundColor?: string
}

type AnchorStyleFn = StyledInterpolationFunction<AnchorStyledProps>

type AnchorRef = HTMLDivElement
type AnchorComponent = ForwardRefExoticComponent<AnchorProps & RefAttributes<AnchorRef>>

export type {
    AnchorComponent, AnchorProps, AnchorRef, AnchorStyleFn, AnchorStyledProps
}

