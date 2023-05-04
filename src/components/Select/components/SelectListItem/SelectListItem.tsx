import {
    forwardRef,
    useState,
    useCallback
} from 'react'

import ListItem, {
    ListItemTypes
} from '@components/ListItem'
import Collapsible from '@components/Collapsible'
import { Icons } from '@components/Icon'

import * as Styled from './style'
import type * as Types from './types'
import type { MouseEventHandler } from 'react'

const SelectListItem: Types.SelectListItemComponent = forwardRef((props, ref) => {
    const {
        type = ListItemTypes.Normal,
        parentId,
        children,
        onSelect,
        ...filteredProps
    } = props

    const isNested = children !== undefined ? true : false

    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggleNested = useCallback(() => {
        setIsExpanded(current => !current)
    }, [])

    const handleOnNestedListClick = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        event.stopPropagation()
    }, [])

    const handleOnSelect = useCallback((value: any) => {
        if (typeof onSelect === 'function') {
            onSelect(value, parentId)
        }
    }, [onSelect, parentId])

    const actionIcon = isNested ? (
        isExpanded ? (
            Icons.ChevronUp
        ) : (
            Icons.ChevronDown
        )
    ) : (
        undefined
    )

    return (
        <ListItem
            {...filteredProps}
            ref={ref}
            type={type}
            actionIcon={actionIcon}
            onSelect={handleOnSelect}
            onActionClick={handleToggleNested}
        >
            {
                isNested ? (
                    <Collapsible open={isExpanded}>
                        <Styled.List
                            tabIndex={-1}
                            allowKeyboardNavigation={false}
                            type={type}
                            onClick={handleOnNestedListClick}
                        >
                            {children}
                        </Styled.List>
                    </Collapsible>
                ) : (
                    null
                )
            }
        </ListItem>
    )
})

SelectListItem.displayName = 'SelectListItem'

export default SelectListItem