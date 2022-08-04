import {
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactNode,
    RefAttributes
} from 'react'

export interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    anchor?: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    }
}

export type AnchorRef = HTMLDivElement

export type AnchorComponent = ForwardRefExoticComponent<AnchorProps & RefAttributes<AnchorRef>>