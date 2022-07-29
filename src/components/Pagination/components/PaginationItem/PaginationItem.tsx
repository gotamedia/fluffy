import { useCallback } from 'react'

import { PaginationElementTypes } from '../../types'

import * as Styled from './style'
import type * as Types from './types'

const PaginationItem: Types.PaginationItemComponent = (props) => {
    const {
        size,
        variant,
        type,
        active,
        disabled,
        page,
        onClick
    } = props

    const handleOnClick = useCallback(() => {
        onClick(type, page)
    }, [
        onClick,
        type,
        page
    ])

    const sharedProps = {
        size: size,
        variant: variant,
        disabled: disabled,
        onClick: handleOnClick
    }

    switch(type) {
        case PaginationElementTypes.PreviousPageButton:
        case PaginationElementTypes.NextPageButton: {
            return (
                <Styled.NavigationButton
                    $type={type}
                    {...sharedProps}
                />
            )
        }

        case PaginationElementTypes.PageButton: {
            return (
                <Styled.PageButton
                    $active={active}
                    {...sharedProps}
                >
                    {page}
                </Styled.PageButton>
            )
        }

        case PaginationElementTypes.SeparationIndicator: {
            return (
                <Styled.Separation>
                    {'...'}
                </Styled.Separation>
            )
        }

        default:
            return (
                null
            )
    }
}

export default PaginationItem