import type {
    HTMLAttributes,
    ReactNode,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react'

import type { IntersectionOptions } from 'react-intersection-observer'

export interface LazyLoadProps extends HTMLAttributes<HTMLDivElement> {
    observerOptions?: IntersectionOptions,
    onLoaded?: () => void,
    children: ReactNode
}

export type LazyLoadRef = HTMLDivElement

export type LazyLoadComponent = ForwardRefExoticComponent<LazyLoadProps & RefAttributes<LazyLoadRef>>