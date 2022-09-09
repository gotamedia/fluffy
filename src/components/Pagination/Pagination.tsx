import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import usePagination from './hooks/usePagination'

import PaginationItem from './components/PaginationItem'

import { PaginationElementTypes } from './types'

import * as Styled from './style'
import type * as Types from './types'

const Pagination: Types.PaginationComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        disabled,
        onChange,
        activePage,
        totalPages,
        visiblePages,
        showPreviousPageButton = true,
        showFirstPageButton = true,
        showSeparationIndicator = true,
        showLastPageButton = true,
        showNextPageButton = true,
        className,
    } = props

    const paginationBlueprint = usePagination({
        activePage,
        totalPages,
        visiblePages,
        showPreviousPageButton,
        showFirstPageButton,
        showSeparationIndicator,
        showLastPageButton,
        showNextPageButton
    })

    const handleOnItemClick = useCallback((type: PaginationElementTypes, page?: number) => {
        switch(type) {
            case PaginationElementTypes.NextPageButton:
                onChange(activePage + 1)
                break

            case PaginationElementTypes.PreviousPageButton:
                onChange(activePage - 1)
                break

            case PaginationElementTypes.PageButton:
                onChange(page!)
                break
        }
    }, [onChange, activePage])

    const classNameValue = classNames({
        'fluffy-pagination': true,
        [className || '']: true
    })

    return (
        <Styled.Wrapper
            ref={ref}
            className={classNameValue}
        >
            {
                paginationBlueprint.map((item, idx) => {
                    return (
                        <PaginationItem
                            {...item}
                            key={`${item.type}-${item.page ? item.page : 'item'}-${idx}`}
                            size={size}
                            variant={variant}
                            disabled={disabled || item.disabled}
                            onClick={handleOnItemClick}
                        />
                    )
                })
            }
        </Styled.Wrapper>
    )
})

Pagination.displayName = 'Pagination'

export default Pagination