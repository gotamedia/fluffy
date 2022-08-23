import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from 'react'

export interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
    anchor?: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    },
    forceDirection?: boolean,
    withFocusTrap?: boolean
}

export type AnchorRef = HTMLDivElement

export type AnchorComponent = ForwardRefExoticComponent<AnchorProps & RefAttributes<AnchorRef>>