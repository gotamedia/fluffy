import type { FC } from 'react'

import type {
    PaginationElement,
    PaginationSizeType,
    PaginationVariantType
} from '../../types'

export type PaginationItemProps = PaginationElement & {
    size?: PaginationSizeType,
    variant?: PaginationVariantType,
    onClick: (type: PaginationElement['type'], page: PaginationElement['page']) => void
}

export type PaginationItemComponent = FC<PaginationItemProps>