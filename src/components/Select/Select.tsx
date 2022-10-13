import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    useCallback,
    Children,
    cloneElement
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import { ListItemTypes } from '../ListItem/types'

import * as Styled from './style'
import * as Types from './types'
import type {
    MouseEventHandler,
    KeyboardEventHandler,
    ReactElement
} from 'react'
import type { ListItemProps } from '../ListItem/types'

// TODO: Add "close/clear" buttons below the list?
export const Select: Types.SelectComponent = forwardRef((props, ref) => {
    const {
        children,
        triggerProps,
        overlayProps,
        onClickOutside,
        placeholder,
        listProps,
        selected = [],
        onSelect,
        width,
        minWidth,
        closeOnSelect,
        isMultiSelect,
        variant,
        size,
        disabled,
        showFilter,
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)
    const shouldfocusTrigger = useRef(false)
    const initiatedRef = useRef(false)

    const [triggerRef, setTriggerRef] = useState<HTMLButtonElement | null>(null)
    const [listRef, setListRef] = useState<HTMLDivElement | null>(null)
    const [triggerWidth, setTriggerWidth] = useState<Types.SelectProps['width']>(width)

    const [isOpen, setIsOpen] = useState(!width && !minWidth ? true : false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (!width && !minWidth) {
            if (listRef && triggerWidth === undefined ) {
                const listRect = listRef.getBoundingClientRect()

                setTriggerWidth(listRect.width)
                setIsOpen(false)

                shouldfocusTrigger.current = true
                initiatedRef.current = true
            }
        } else {
            initiatedRef.current = true
            shouldfocusTrigger.current = true
        }
    }, [
        width,
        minWidth,
        listRef,
        triggerWidth
    ])

    useEffect(() => {
        if (shouldfocusTrigger.current) {
            if (!isOpen && previousIsOpenState.current && triggerRef) {
                triggerRef.focus()
            }
        }
    }, [isOpen, triggerRef])

    useEffect(() => {
        if (initiatedRef.current) {
            previousIsOpenState.current = isOpen
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen && listRef) {
            if (document.activeElement !== listRef) {
                listRef.focus()
            }
        }
    }, [isOpen, listRef])

    const handleOnClickOutside = useCallback<MouseEventHandler<HTMLDivElement>>(event => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        if (typeof overlayProps?.onClick === 'function') {
            overlayProps.onClick(event)
        }

        setIsOpen(false)
    }, [onClickOutside, overlayProps])

    const toggleOpen = useCallback(() => {
        setIsOpen(current => !current)
    }, [])

    const handleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof listProps?.onKeyDown === 'function') {
            listProps.onKeyDown(event)
        }

        if (isOpen) {
            switch(event.code) {
                case 'Escape': {
                    event.preventDefault()
                    event.stopPropagation()

                    setIsOpen(false)
                }
            }
        }
    }, [isOpen, listProps])

    const handleOnSelect = useCallback((item: any) => {
        if (typeof onSelect === 'function') {
            onSelect(item)
        }

        if (!isMultiSelect || closeOnSelect) {
            setIsOpen(false)
        }
    }, [
        onSelect,
        isMultiSelect,
        closeOnSelect
    ])

    const hasSelectedItems = selected.length > 0

    const label = hasSelectedItems ? (
        selected
            .map(i => i.label)
            .filter(i => i)
            .join(', ')
    ) : (
        placeholder
    )

    const className = classNames({
        'fluffy-select': true,
        [filterdProps?.className || '']: true
    })

    const triggerClassName = classNames({
        [triggerProps?.className || '']: true
    })

    const componentState = {
        isOpen: isOpen
    }

    return (
        <>
            <Styled.Button
                type={"button"}
                ref={setTriggerRef}
                disabled={disabled}
                {...triggerProps}
                className={triggerClassName}
                variant={variant}
                size={size}
                onClick={toggleOpen}
                style={{
                    width: triggerWidth,
                    minWidth: minWidth,
                    ...triggerProps?.style
                }}
            >
                {label}

                <Styled.Icon $componentState={componentState} />
            </Styled.Button>

            <Styled.Menu
                {...filterdProps}
                className={className}
                shouldFocusOnClose={false}
                ref={undefined}
                show={isOpen}
                anchor={triggerRef}
                onClickOutside={handleOnClickOutside}
                listProps={{
                    ...listProps,
                    showFilter: showFilter,
                    ref: setListRef,
                    type: ListItemTypes.Select,
                    onSelect: handleOnSelect,
                    onKeyDown: handleOnKeyDown
                }}
            >
                {
                    Children.map(children, (child) => {
                        if (child) {
                            const childElement = child as ReactElement<ListItemProps>

                            const childProps = {
                                ...childElement.props,
                                selected: selected
                                    .map(i => i.id)
                                    .includes(childElement.props?.id)
                            }

                            return (
                                cloneElement(childElement, childProps)
                            )
                        } else {
                            return (
                                null
                            )
                        }
                    })
                }
            </Styled.Menu>
        </>
    )
})

Select.displayName = 'Select'

export default withThemeProps(Select) as Types.SelectComponent