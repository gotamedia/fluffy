import { PaginationElement } from '../../types'

export type usePaginationProps = {
    activePage: number,
    totalPages: number,
    visiblePages: number,
    showPreviousPageButton?: boolean,
    showFirstPageButton?: boolean,
    showSeparationIndicator?: boolean,
    showLastPageButton?: boolean,
    showNextPageButton?: boolean
}

export type UsePagination = (props: usePaginationProps) => PaginationElement[]