import {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import scrollIntoView from 'scroll-into-view-if-needed'

import useList from '@components/List/hooks/useList'
import {
    Icons,
    IconSizes
} from '@components/Icon'
import { CheckboxVariants } from '@components/Checkbox'

import { ListItemTypes } from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { MouseEventHandler } from 'react'

const ListItem: Types.ListItemComponent = forwardRef((props, ref) => {
    const {
        type = ListItemTypes.Normal,
        scrollOnTargeted = true,
        indeterminate,
        text,
        subText,
        icon,
        targeted,
        selected,
        value,
        actionIcon,
        onActionClick,
        onSelect,
        onClick,
        children,
        ...DOMProps
    } = props

    const { _domRef: listRef } = useList()

    const listItemRef = useRef<HTMLDivElement>(null)

    const isTypeNormal = type === ListItemTypes.Normal
    const isTypeSelect = type === ListItemTypes.Select
    const isTypeCheckbox = type === ListItemTypes.Checkbox

    const isTargeted = !isTypeNormal && targeted

    useImperativeHandle(ref, () => listItemRef.current as HTMLDivElement)

    useEffect(() => {
        if (scrollOnTargeted && isTargeted && listItemRef.current) {
            scrollIntoView(listItemRef.current, {
                scrollMode: 'if-needed',
                behavior: 'smooth',
                boundary: listRef?.current
            })
        }
    }, [scrollOnTargeted, isTargeted, listRef])

    const handleOnSelect = useCallback(() => {
        if (typeof onSelect === 'function') {
            onSelect(value)
        }
    }, [onSelect, value])

    const handleOnClick = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (typeof onClick === 'function') {
            onClick(event)
        }

        handleOnSelect()
    }, [onClick, handleOnSelect])

    const handleOnActionClick = useCallback<MouseEventHandler<HTMLElement>>((event) => {
        event.stopPropagation()
        
        if (typeof onActionClick === 'function') {
            onActionClick(event)
        }
    }, [onActionClick])

    const checkmarkIcon = !actionIcon && isTypeSelect && selected ? true : false

    return (
        <Styled.Wrapper
            ref={listItemRef}
            tabIndex={-1}
            onClick={handleOnClick}
            {...DOMProps}
            $targeted={isTargeted}
        >
            <Styled.InnerWrapper>
                {
                    isTypeCheckbox ? (
                        <Styled.Checkbox
                            tabIndex={-1}
                            checked={selected}
                            indeterminate={indeterminate}
                            variant={isTargeted ? CheckboxVariants.Secondary : CheckboxVariants.Primary}
                        />
                    ) : (
                        null
                    )
                }

                {
                    icon ? (
                        <Styled.Icon
                            icon={icon}
                            size={IconSizes.Tiny}
                        />
                    ) : (
                        null
                    )
                }

                <Styled.TextWrapper>
                    {
                        text ? (
                            <Styled.Text>
                                {text}
                            </Styled.Text>
                        ) : (
                            null
                        )
                    }

                    {
                        subText ? (
                            <Styled.SubText>
                                {subText}
                            </Styled.SubText>
                        ) : (
                            null
                        )
                    }
                </Styled.TextWrapper>

                {
                    checkmarkIcon ? (
                        <Styled.Icon
                            icon={Icons.Check}
                            size={IconSizes.Tiny}
                        />
                    ) : (
                        null
                    )
                }

                {
                    actionIcon ? (
                        <Styled.ActionIcon
                            icon={actionIcon}
                            size={IconSizes.Tiny}
                            onClick={handleOnActionClick}
                        />
                    ) : (
                        null
                    )
                }
            </Styled.InnerWrapper>

            {children}
        </Styled.Wrapper>
    )
})

ListItem.displayName = 'ListItem'

export default ListItem