import {
    forwardRef,
    useRef,
    useState,
    useEffect,
    Children,
    useCallback,
    cloneElement
} from 'react'

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

    const targetedIndexRef = useRef<number>(-1)
    const filterRef = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [filterValue, setFilterValue] = useState('')
    const [targetedIndex, setTargetedIndex] = useState(-1)

    const [filteredChildren, setFilteredChildren] = useState<ReactNode>()

    const listChildren = filteredChildren || children

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
            filterRef.current.focus()
        }

        setIsFocused(true)
    }, [onFocus])

    const handleOnBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (typeof onBlur === 'function') {
            onBlur(event)
        }

        setIsFocused(false)
    }, [onBlur])

    const handleOnArrowUp = useCallback(() => {
        setTargetedIndex(current => {
            let nextIndex = current -1

            if (nextIndex < 0) {
                nextIndex = 0
            } else if (nextIndex > (Children.count(listChildren) -1)) {
                nextIndex = Children.count(listChildren) -1    
            }

            return nextIndex
        })
    }, [listChildren])

    const handleOnArrowDown = useCallback(() => {
        setTargetedIndex(current => {
            let nextIndex = current +1

            if ((Children.count(listChildren) -1) < nextIndex) {
                nextIndex = Children.count(listChildren) -1
            }

            return nextIndex
        })
    }, [listChildren])

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
                setIsFocused(true)
                hadnleOnKeyDown(event)

                break
            }

            case 'ArrowDown': {
                setIsFocused(true)
                hadnleOnKeyDown(event)
                
                break
            }

            case 'Enter': {
                setIsFocused(true)
                hadnleOnKeyDown(event)

                break
            }

            default:
                setIsFocused(false)
        }
    }, [onKeyDown, hadnleOnKeyDown])

    return (
        <Styled.Wrapper
            ref={ref}
            tabIndex={0}
            onKeyDown={hadnleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            {...DOMProps}
        >
            {
                showFilter && (
                    <Styled.InputGroup>
                        <Styled.Input
                            ref={filterRef}
                            value={filterValue}
                            onValueChange={handleOnFilterValueChange}
                            onKeyDown={hadnleOnInputKeyDown}
                        />

                        <Styled.ClearIcon onClick={handleOnFilterClear}/>
                    </Styled.InputGroup>
                )
            }

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
    )
})

List.displayName = 'List'

export default List