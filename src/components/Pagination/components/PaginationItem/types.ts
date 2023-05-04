import type { FC } from 'react'

import type {
    PaginationElement,
    PaginationSize,
    PaginationVariant
} from '@components/Pagination/types'

export type PaginationItemProps = PaginationElement & {
    size: PaginationSize,
    variant: PaginationVariant,
    onClick: (type: PaginationElement['type'], page: PaginationElement['page']) => void
}

export type PaginationItemComponent = FC<PaginationItemProps>