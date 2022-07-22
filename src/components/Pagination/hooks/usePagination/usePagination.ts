import {
    PaginationElementTypes,
    PaginationElement
} from '../../types'

import type * as Types from './types'

const usePagination: Types.UsePagination = (props) => {
    const {
        activePage,
        totalPages,
        visiblePages,
        showPreviousPageButton = true,
        showFirstPageButton = true,
        showSeparationIndicator = true,
        showLastPageButton = true,
        showNextPageButton = true
    } = props

    const activePageMargin = (visiblePages - 1) / 2

    // If the activePageMargin will end in a decimal number its better to show more upcoming pages (end) then old pages (start) that the user has
    // potentially already seen
    let start = activePage - Math.floor(activePageMargin)
    let end = activePage + Math.ceil(activePageMargin)
    let addFirstPageButton = false
    let addFirstPageSeparationIndicator = false
    let addLastPageSeparationIndicator = false
    let addLastPageButton = false

    // Shift towards the end if overhanging to the start
    if (start < 1) {
        end += 1 - start
        start = 1
    }

    // Shift towards the start if overhanging to the end but dont overhand to the start again
    if (end > totalPages) {
        start = Math.max(1, start - (end - totalPages))
        end = totalPages
    }

    // Separate first page button and add separator
    if (showFirstPageButton && start > 1) {
        addFirstPageButton = true
        start += 1
        addFirstPageSeparationIndicator = showSeparationIndicator && start > 2
    }

    // Separate last page button and add separator
    if (showLastPageButton && end < totalPages) {
        addLastPageButton = true
        end -= 1
        addLastPageSeparationIndicator = showSeparationIndicator && end < (totalPages - 1)
    }

    const blueprint: PaginationElement[] = []

    if (showPreviousPageButton) {
        blueprint.push({
            type: PaginationElementTypes.PreviousPageButton,
            disabled: activePage === 1
        })
    }

    if (addFirstPageButton) {
        blueprint.push({
            type: PaginationElementTypes.PageButton,
            page: 1
        })
    }

    if (addFirstPageSeparationIndicator) {
        blueprint.push({
            type: PaginationElementTypes.SeparationIndicator
        })
    }

    const pages = Array.from(
        { length: end - start + 1 },
        (_, i) => i + start
    )

    blueprint.push(...pages.map(page => ({
        type: PaginationElementTypes.PageButton,
        page: page,
        active: page === activePage
    })))

    if (addLastPageSeparationIndicator) {
        blueprint.push({
            type: PaginationElementTypes.SeparationIndicator
        })
    }

    if (addLastPageButton) {
        blueprint.push({
            type: PaginationElementTypes.PageButton,
            page: totalPages
        })
    }

    if (showNextPageButton) {
        blueprint.push({
            type: PaginationElementTypes.NextPageButton,
            disabled: activePage === totalPages
        })
    }
    
    return blueprint
}

export default usePagination