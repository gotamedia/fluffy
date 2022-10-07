import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    useCallback
} from 'react'

import { v4 as createUniqueId } from 'uuid'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import useLazyRef from '@hooks/useLazyRef'
import useMenu from '@components/Menu/hooks/useMenu'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

export const SubMenu: Types.SubMenuComponent = forwardRef((props, ref) => {
    const {
        children,
        onMouseEnter,
        onMouseLeave,
        targeted,
        listProps,
        ...filteredProps
    } = props

    const timeoutId = useRef<ReturnType<typeof setTimeout>>()
    const hasBeenVisted = useRef(false)
    const id = useLazyRef<string>(() => createUniqueId())

    const {
        activeSubMenuId,
        addSubMenu,
        removeSubMenu,
        onClickOutside
    } = useMenu() || {}

    const [listItemRef, setListItemRef] = useState<HTMLDivElement | null>(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const [showSubMenu, setShowSubMenu] = useState(false)

    useImperativeHandle(ref, () => {
        return listItemRef as HTMLDivElement
    },[listItemRef])

    useEffect(() => {
        const handleOnKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowRight': {
                    event.preventDefault()
                    event.stopPropagation()
                    
                    setShowSubMenu(true)
                
                    break
                }
    
                case 'ArrowLeft': {
                    if (activeSubMenuId === id.current) {
                        event.preventDefault()
                        event.stopPropagation()
        
                        setShowSubMenu(false)
                    }
    
                    break
                }
            }
        }

        if (targeted) {
            window.addEventListener('keydown', handleOnKeyDown)
        }

        return () => window.removeEventListener('keydown', handleOnKeyDown)
    }, [activeSubMenuId, targeted, id])

    useEffect(() => {
        if (listItemRef) {
            const listItemRect = listItemRef.getBoundingClientRect()

            const subMenuOffset = {
                x: listItemRect.width - 5,
                y: -(listItemRect.height + 5)
            }

            setOffset(subMenuOffset)
        }
    }, [listItemRef])

    useEffect(() => {
        const subMenuId = id.current!

        if (showSubMenu) {
            addSubMenu?.(subMenuId)
        } else {
            removeSubMenu?.(subMenuId)
        }
    }, [
        id,
        showSubMenu,
        addSubMenu,
        removeSubMenu
    ])

    useEffect(() => {
        const subMenuId = id.current!
        return () => removeSubMenu?.(subMenuId)
    }, [id, removeSubMenu])

    const handleOnMouseEnterListItem = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        hasBeenVisted.current = false

        if (typeof onMouseEnter === 'function') {
            onMouseEnter(event)
        }

        setShowSubMenu(true)
    }, [onMouseEnter])

    const handleOnMouseLeaveListItem = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event)
        }

        timeoutId.current = setTimeout(() => {
            setShowSubMenu(false)
        }, 50)
    }, [onMouseLeave])

    const handleOnMouseEnterList = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        hasBeenVisted.current = true
        clearTimeout(timeoutId.current)

        if (typeof listProps?.onMouseEnter === 'function') {
            listProps.onMouseEnter(event)
        }
    }, [listProps])

    const handleOnMouseLeaveList = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (!hasBeenVisted.current) {
            setShowSubMenu(false)
        }

        if (typeof listProps?.onMouseLeave === 'function') {
            listProps.onMouseLeave(event)
        }
    }, [listProps])

    const className = classNames({
        'fluffy-sub-menu': true,
        [filteredProps.className || '']: true
    })

    const isTargeted = (showSubMenu || targeted) ? true : false

    const componentState = {
        targeted: isTargeted
    }

    return (
        <>
            <Styled.ListItem
                {...filteredProps}
                className={className}
                targeted={isTargeted}
                onMouseEnter={handleOnMouseEnterListItem}
                onMouseLeave={handleOnMouseLeaveListItem}
                ref={setListItemRef}
            >
                <Styled.SubMenuIcon $componentState={componentState}/>
            </Styled.ListItem>

            <Styled.Menu
                offset={offset}
                show={showSubMenu}
                anchor={listItemRef}
                onClickOutside={onClickOutside}
                listProps={{
                    ...listProps,
                    onMouseEnter: handleOnMouseEnterList,
                    onMouseLeave: handleOnMouseLeaveList
                }}
            >
                {children}
            </Styled.Menu>
        </>
    )
})

SubMenu.displayName = 'SubMenu'

export default withThemeProps(SubMenu) as Types.SubMenuComponent