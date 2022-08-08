import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import Button from '../Button'
import List from '../List'

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
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)

    const [triggerRef, setTriggerRef] = useState<HTMLButtonElement | null>(null)
    const [listRef, setListRef] = useState<HTMLDivElement | null>(null)

    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        if (!isOpen && previousIsOpenState.current && triggerRef) {
            triggerRef.focus()
        }

        previousIsOpenState.current = isOpen
    }, [isOpen, triggerRef])

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
                onClick={toggleOpen}
            >
                {label}

                <Styled.Icon $isOpen={isOpen} />
            </Button>

            <Styled.Popover
                {...filterdProps}
                ref={undefined}
                style={{
                    ...filterdProps.style,
                    overflow: 'unset'
                }}
                overlayProps={overlayProps}
                show={isOpen}
                anchor={triggerRef}
                onClickOutside={handleOnClickOutside}
            >
                <Styled.Container>
                    <List
                        ref={setListRef}
                        {...listProps}
                        onSelect={handleOnSelect}
                        onKeyDown={handleOnKeyDown}
                    >
                        {children}
                    </List>
                </Styled.Container>
            </Styled.Popover>
        </>
    )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown