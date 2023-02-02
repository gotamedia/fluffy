import {
    forwardRef,
    useState,
    useImperativeHandle,
    useCallback,
    Children,
    cloneElement
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import * as Styled from './style'
import * as Types from './types'
import type {
    KeyboardEventHandler,
    ReactElement
} from 'react'
import type { ListItemProps } from '../ListItem/types'

export const Dropdown: Types.DropdownComponent = forwardRef((props, ref) => {
    const {
        value,
        children,
        triggerProps,
        onClickOutside,
        label,
        listProps,
        onChange,
        variant,
        size,
        disabled,
        closeOnScrollOutside,
        ...filterdProps
    } = props

    const [triggerRef, setTriggerRef] = useState<HTMLButtonElement | null>(null)

    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false)
        }
    }, [])

    const handleOnClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        setIsOpen(false)
    }, [onClickOutside])

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

    const handleOnSelect = useCallback((value: any) => {
        if (typeof onChange === 'function') {
            onChange(value)
        }

        setIsOpen(false)
    }, [onChange])

    const triggerClassName = classNames({
        'fluffy-dropdown-trigger': true,
        [triggerProps?.className || ''] : true
    })

    const className = classNames({
        'fluffy-dropdown': true,
        [filterdProps.className || ''] : true
    })

    const componentState = {
        isOpen: isOpen
    }

    return (
        <>
            <Styled.Button
                ref={setTriggerRef}
                disabled={disabled}
                {...triggerProps}
                className={triggerClassName}
                variant={variant}
                size={size}
                onClick={toggleOpen}
            >
                {label}

                <Styled.Icon $componentState={componentState} />
            </Styled.Button>

            <Styled.Menu
                {...filterdProps}
                className={className}
                ref={undefined}
                show={isOpen}
                anchor={triggerRef}
                onClickOutside={handleOnClickOutside}
                onScrollOutside={closeOnScrollOutside ? toggleOpen : undefined}
                listProps={{
                    ...listProps,
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
                                selected: value !== undefined && value === childElement.props?.value
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

Dropdown.displayName = 'Dropdown'

export default withThemeProps(Dropdown) as Types.DropdownComponent