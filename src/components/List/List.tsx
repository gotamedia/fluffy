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

import * as Styled from './style'
import type * as Types from './types'
import type {
    FocusEvent,
    KeyboardEventHandler,
    ReactNode,
    ReactElement
} from 'react'
import type { ListItemProps } from '../ListItem/types'

const getChildByIndex = (children: ReactNode, index: number) => {
    const items = Children.toArray(children)
    
    if (items && items.length) {
        return items[index] as ReactElement<ListItemProps>
    }
}

const mapChildren = (children: ReactNode, filterValue?: string) => {
    return Children.map(children, (child) => {
        if (child) {
            const childElement = child as ReactElement<ListItemProps>

            if (filterValue && filterValue.length) {
                if (childElement.props?.text?.toLowerCase().includes(filterValue.toLowerCase())) {
                    return cloneElement(childElement, childElement.props)
                } else {
                    return null
                }
            }

            return cloneElement(childElement, childElement.props)
        } else {
            return null
        }
    })
}

const List: Types.ListComponent = forwardRef((props, ref) => {
    const {
        type = 'normal',
        size = 'normal',
        border = 'normal',
        allowKeyboardNavigation = true,
        children,
        onKeyDown,
        onFocus,
        onBlur,
        onSelect,
        showFilter,
        ...DOMProps
    } = props

    const wrapperRef = useRef<HTMLDivElement>(null)
    const targetedIndexRef = useRef<number>(-1)
    const filterRef = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [filterValue, setFilterValue] = useState('')
    const [targetedIndex, setTargetedIndex] = useState(-1)

    const [filteredChildren, setFilteredChildren] = useState<ReactNode>()

    const listChildren = filteredChildren || children

    useImperativeHandle(ref, () => {
        const listRef = wrapperRef.current! as Types.ListRef

        listRef.isFocused = isFocused
        listRef.setFocus = (focused) => setIsFocused(focused)

        return listRef
    }, [isFocused])

    useEffect(() => {
        targetedIndexRef.current = targetedIndex
    }, [targetedIndex])

    useEffect(() => {
        setFilteredChildren(mapChildren(children, filterValue))
    }, [children, filterValue])

    const handleOnFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (typeof onFocus === 'function') {
            onFocus(event)
        }

        if (filterRef.current) {
            filterRef.current.focus({
                preventScroll: true
            })
        }

        setIsFocused(true)
    }, [onFocus])

    const handleOnBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (typeof onBlur === 'function') {
            onBlur(event)
        }

        setIsFocused(false)
    }, [onBlur])

    const getPreviousIndex = useCallback((index: number, currentIndex?: number): number => {
        let nextIndex = index -1

        if (nextIndex < 0) {
            nextIndex = 0
        }

        const targetedChild = getChildByIndex(listChildren, nextIndex)

        if (targetedChild && targetedChild?.props.asTitle) {
            if (nextIndex === 0) {
                return currentIndex || index
            } else {
                return getPreviousIndex(nextIndex, currentIndex || index)
            }
        }

        return nextIndex
    }, [listChildren])

    const getNextIndex = useCallback((index: number, currentIndex?: number): number => {
        let nextIndex = index +1

        if (nextIndex > (Children.count(listChildren) -1)) {
            nextIndex = Children.count(listChildren) -1
        }

        const targetedChild = getChildByIndex(listChildren, nextIndex)

        if (targetedChild && targetedChild?.props.asTitle) {
            if (nextIndex === (Children.count(listChildren) -1)) {
                return currentIndex || index
            } else {
                return getNextIndex(nextIndex, currentIndex || index)
            }
        }

        return nextIndex
    }, [listChildren])

    const handleOnArrowUp = useCallback(() => {
        setTargetedIndex(current => getPreviousIndex(current))
    }, [getPreviousIndex])

    const handleOnArrowDown = useCallback(() => {
        setTargetedIndex(current => getNextIndex(current))
    }, [getNextIndex])

    const handleOnSelect = useCallback(() => {
        if (isFocused && typeof onSelect === 'function') {
            const targetedChild = getChildByIndex(listChildren, targetedIndexRef.current)

            if (targetedChild && targetedChild?.props.value) {
                onSelect(targetedChild.props.value)
            }
        }
    }, [
        isFocused,
        onSelect,
        listChildren
    ])

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

    const handleOnFilterValueChange = useCallback((value: string) => {
        setFilterValue(value)
    }, [])

    const handleOnFilterClear = useCallback(() => {
        setFilterValue('')
    }, [])

    const hadnleOnInputKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        event.stopPropagation()

        switch (event.code) {
            case 'ArrowUp': {
                hadnleOnKeyDown(event)

                break
            }

            case 'ArrowDown': {
                hadnleOnKeyDown(event)
                
                break
            }

            case 'Enter': {
                hadnleOnKeyDown(event)

                break
            }

            default:
                setIsFocused(false)
        }
    }, [onKeyDown, hadnleOnKeyDown])

    const context = {
        _domRef: wrapperRef
    }

    return (
        <ListContext.Provider value={context}>
            <>
                {
                    showFilter && (
                        <Styled.InputGroup>
                            <Styled.Input
                                enterKeyHint={'enter'}
                                ref={filterRef}
                                value={filterValue}
                                onValueChange={handleOnFilterValueChange}
                                onKeyDown={hadnleOnInputKeyDown}
                            />

                            <Styled.ClearIcon onClick={handleOnFilterClear}/>
                        </Styled.InputGroup>
                    )
                }
                
                <Styled.Wrapper
                    ref={wrapperRef}
                    tabIndex={0}
                    onKeyDown={hadnleOnKeyDown}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    {...DOMProps}
                >
                    {
                        Children.map(listChildren, (child, idx) => {
                            if (child) {
                                const childElement = child as ReactElement<ListItemProps>
                
                                const childProps = {
                                    size: size,
                                    border: border,
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
            </>
        </ListContext.Provider>
    )
})

List.displayName = 'List'

export default List