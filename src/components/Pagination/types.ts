import type {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { usePaginationProps } from './hooks/usePagination/types'

export const PaginationVariants = {
    Primary: 'primary' as const,
    Secondary: 'secondary' as const,
    Outline: 'outline' as const
}

export type PaginationVariant = typeof PaginationVariants[keyof typeof PaginationVariants]

export const PaginationSizes = {
    Tiny: 'tiny' as const,
    Small: 'small' as const,
    Normal: 'normal' as const,
    Big: 'big' as const,
    Huge: 'huge' as const
}

export type PaginationSize = typeof PaginationSizes[keyof typeof PaginationSizes]

export type PaginationProps = usePaginationProps & {
    size?: PaginationSize,
    variant?: PaginationVariant,
    disabled?: boolean,
    onChange: (page: number) => void
}

export type PaginationRef = HTMLDivElement

export type PaginationComponent = ForwardRefExoticComponent<PaginationProps & RefAttributes<PaginationRef>>

export enum PaginationElementTypes {
    PreviousPageButton = 'pagination:previous-page-button',
    SeparationIndicator = 'pagination:pages-separation',
    PageButton = 'pagination:page-button',
    NextPageButton = 'pagination:next-page-button'
}

export type PaginationElement = {
    type: PaginationElementTypes,
    page?: number,
    active?: boolean,
    disabled?: boolean
}
