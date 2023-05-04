import {
    forwardRef,
    useRef,
    useState,
    useImperativeHandle,
    useEffect,
    Children,
    useCallback,
    cloneElement
} from 'react'

import ListContext from './contexts/ListContext'
import { ListItemTypes } from '@components/ListItem/types'

import * as Styled from './style'
import type * as Types from './types'
import type { ListItemProps } from '@components/ListItem/types'
import type {
    FocusEvent,
    KeyboardEventHandler,
    ReactNode,
    ReactElement
} from 'react'

const getChildByIndex = (children: ReactNode, index: number) => {
    const items = Children.toArray(children)
    
    if (items && items.length) {
        return items[index] as ReactElement<ListItemProps>
    }
}

const List: Types.ListComponent = forwardRef((props, ref) => {
    const {
        type = ListItemTypes.Normal,
        allowKeyboardNavigation = true,
        children,
        onKeyDown,
        onFocus,
        onBlur,
        onSelect,
        ...DOMProps
    } = props

    const wrapperRef = useRef<HTMLDivElement>(null)
    const targetedIndexRef = useRef<number>(-1)

    const [isFocused, setIsFocused] = useState(false)
    const [targetedIndex, setTargetedIndex] = useState(-1)

    const getPreviousIndex = useCallback((index: number): number => {
        let nextIndex = index -1

        if (nextIndex < 0) {
            nextIndex = 0
        }

        return nextIndex
    }, [])

    const handleOnSelect = useCallback(() => {
        if (isFocused && typeof onSelect === 'function') {
            const targetedChild = getChildByIndex(children, targetedIndexRef.current)

            if (targetedChild && targetedChild?.props.value) {
                onSelect(targetedChild.props.value)
            }
        }
    }, [
        isFocused,
        onSelect,
        children
    ])

    const getNextIndex = useCallback((index: number): number => {
        let nextIndex = index +1

        if (nextIndex > (Children.count(children) -1)) {
            nextIndex = Children.count(children) -1
        }

        return nextIndex
    }, [children])

    const handleOnArrowUp = useCallback(() => {
        setTargetedIndex(current => getPreviousIndex(current))
    }, [getPreviousIndex])

    const handleOnArrowDown = useCallback(() => {
        setTargetedIndex(current => getNextIndex(current))
    }, [getNextIndex])

    const hadnleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        if (allowKeyboardNavigation) {
            setIsFocused(true)

            switch (event.code) {
                case 'ArrowUp': {
                    event.preventDefault()
                    event.stopPropagation()
                    handleOnArrowUp()
                    break
                }
    
                case 'ArrowDown': {
                    event.preventDefault()
                    event.stopPropagation()
                    handleOnArrowDown()
                    break
                }
    
                case 'Enter':
                case 'Space': {
                    event.preventDefault()
                    event.stopPropagation()
                    handleOnSelect()
                    break
                }
            }
        }
    }, [
        onKeyDown,
        allowKeyboardNavigation,
        handleOnArrowUp,
        handleOnArrowDown,
        handleOnSelect
    ])
    
    useImperativeHandle(ref, () => {
        const listRef = wrapperRef.current! as Types.ListRef

        listRef.isFocused = isFocused
        listRef.setFocus = (focused) => setIsFocused(focused)
        listRef.handleOnKeyDown = hadnleOnKeyDown

        return listRef
    }, [isFocused, hadnleOnKeyDown])

    useEffect(() => {
        targetedIndexRef.current = targetedIndex
    }, [targetedIndex])

    const handleOnFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (typeof onFocus === 'function') {
            onFocus(event)
        }

        setIsFocused(true)
    }, [onFocus])

    const handleOnBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (typeof onBlur === 'function') {
            onBlur(event)
        }

        setIsFocused(false)
    }, [onBlur])

    const context = {
        _domRef: wrapperRef
    }

    return (
        <ListContext.Provider value={context}>
            <Styled.Wrapper
                ref={wrapperRef}
                tabIndex={0}
                onKeyDown={hadnleOnKeyDown}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                {...DOMProps}
            >
                {
                    Children.map(children, (child, idx) => {
                        if (child) {
                            const childElement = child as ReactElement<ListItemProps>
            
                            const childProps = {
                                type: type,
                                targeted: isFocused && targetedIndex === idx,
                                onSelect: onSelect,
                                ...childElement.props
                            }

                            return cloneElement(childElement, childProps)
                        } else {
                            return null
                        }
                    })
                }
            </Styled.Wrapper>
        </ListContext.Provider>
    )
})

List.displayName = 'List'

export default List