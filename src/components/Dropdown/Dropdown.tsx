import {
    forwardRef,
    useState,
    useImperativeHandle,
    useCallback,
    Children,
    cloneElement
} from 'react'

import Button from '../Button'
import Menu from '../Menu'

import * as Styled from './style'
import * as Types from './types'
import type {
    KeyboardEventHandler,
    ReactElement
} from 'react'
import type { ListItemProps } from '../ListItem/types'

const Dropdown: Types.DropdownComponent = forwardRef((props, ref) => {
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

    return (
        <>
            <Button
                ref={setTriggerRef}
                disabled={disabled}
                {...triggerProps}
                variant={variant}
                size={size}
                onClick={toggleOpen}
            >
                {label}

                <Styled.Icon $isOpen={isOpen} />
            </Button>

            <Menu
                {...filterdProps}
                ref={undefined}
                show={isOpen}
                anchor={triggerRef}
                onClickOutside={handleOnClickOutside}
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
            </Menu>
        </>
    )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown