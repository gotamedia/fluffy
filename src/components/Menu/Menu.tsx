import {
    forwardRef,
    useRef,
    useState,
    useEffect,
    useCallback
} from 'react'

import List from '../List'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

const Menu: Types.MenuComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        anchor,
        overlayProps,
        onClickOutside,
        listProps,
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)

    const [listRef, setListRef] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!show && previousIsOpenState.current && anchor) {
            anchor.focus()
        }

        previousIsOpenState.current = show
    }, [show, anchor])

    useEffect(() => {
        if (show && listRef) {
            if (document.activeElement !== listRef) {
                listRef.focus()
            }
        }
    }, [show, listRef])

    const handleListRef = useCallback((list: HTMLDivElement) => {
        setListRef(list)

        if (listProps?.ref) {
            if (typeof listProps.ref === 'function') {
                listProps.ref(list)
            } else {
                // @ts-ignore
                listProps.ref.current = list
            }
        }
    }, [listProps])

    const handleOnClickOutside = useCallback<MouseEventHandler<HTMLDivElement>>(event => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        if (typeof overlayProps?.onClick === 'function') {
            overlayProps.onClick(event)
        }
    }, [onClickOutside, overlayProps])

    return (
        <Styled.Popover
            ref={ref}
            {...filterdProps}
            style={{
                ...filterdProps.style,
                overflow: 'unset'
            }}
            show={show}
            anchor={anchor}
            overlayProps={overlayProps}
            onClickOutside={handleOnClickOutside}
        >
            <Styled.Container>
                <List
                    ref={handleListRef}
                    {...listProps}
                >
                    {children}
                </List>
            </Styled.Container>
        </Styled.Popover>
    )
})

Menu.displayName = 'Menu'

export default Menu