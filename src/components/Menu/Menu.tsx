import {
    forwardRef,
    useRef,
    useState,
    useEffect,
    useCallback,
    useMemo
} from 'react'

import classNames from '@utils/classNames'

import useMenu from './hooks/useMenu'
import MenuContext from './contexts/MenuContext'

import * as Styled from './style'
import * as Types from './types'
import type { ListRef } from '../List'
import type { MouseEventHandler } from 'react'

const Menu: Types.MenuComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        anchor,
        shouldFocusOnClose = true,
        overlayProps,
        onClickOutside,
        listProps,
        ...filterdProps
    } = props

    const previousIsOpenState = useRef(false)

    const menuContext = useMenu()

    const [activeSubMenus, setActiveSubMenus] = useState<string[]>([])
    const [listRef, setListRef] = useState<ListRef>()

    useEffect(() => {
        if (shouldFocusOnClose && !show && previousIsOpenState.current && anchor) {
            anchor.focus()
        }

        previousIsOpenState.current = show
    }, [shouldFocusOnClose, show, anchor])

    useEffect(() => {
        if (show && listRef) {
            if (document.activeElement !== listRef) {
                listRef.focus()
            }
        }
    }, [show, listRef])

    const handleListRef = useCallback((list: ListRef) => {
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

    const handleAddActiveSubMenu = useCallback((id: string) => {
        setActiveSubMenus(current => [
            ...current,
            id
        ])
    }, [])

    const handleRemoveActiveSubMenu = useCallback((id: string) => {
        setActiveSubMenus(current => current.filter(i => i !== id))
    }, [])

    const menuContextValue = useMemo(() => {
        return menuContext || {
            activeSubMenuId: activeSubMenus[activeSubMenus.length -1],
            onClickOutside: handleOnClickOutside,
            addSubMenu: handleAddActiveSubMenu,
            removeSubMenu: handleRemoveActiveSubMenu
        }
    }, [
        menuContext,
        activeSubMenus,
        handleOnClickOutside,
        handleAddActiveSubMenu,
        handleRemoveActiveSubMenu
    ])

    const className = classNames({
        'fluffy-menu': true,
        [filterdProps.className || '']: true
    })

    return (
        <MenuContext.Provider value={menuContextValue}>
            <Styled.Popover
                ref={ref}
                {...filterdProps}
                className={className}
                show={show}
                anchor={anchor}
                overlayProps={overlayProps}
                onClickOutside={handleOnClickOutside}
            >
                <Styled.Container>
                    <Styled.List
                        ref={handleListRef}
                        {...listProps}
                    >
                        {children}
                    </Styled.List>
                </Styled.Container>
            </Styled.Popover>
        </MenuContext.Provider>
    )
})

Menu.displayName = 'Menu'

export default Menu