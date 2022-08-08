import {
    forwardRef,
    useState,
    useImperativeHandle,
    useCallback
} from 'react'

import Button from '../Button'
import Menu from '../Menu'

import * as Styled from './style'
import * as Types from './types'
import type {
    MouseEventHandler,
    KeyboardEventHandler
} from 'react'

const Dropdown: Types.DropdownComponent = forwardRef((props, ref) => {
    const {
        children,
        triggerProps,
        overlayProps,
        onClickOutside,
        label,
        listProps,
        onSelect,
        variant,
        size,
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

    const handleOnSelect = useCallback((value: any) => {
        if (typeof onSelect === 'function') {
            onSelect(value)
        }

        setIsOpen(false)
    }, [onSelect])

    return (
        <>
            <Button
                ref={setTriggerRef}
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
                {children}
            </Menu>
        </>
    )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown