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

const List: Types.ListComponent = forwardRef((props, ref) => {
    const {
        type = 'normal',
        size = 'normal',
        allowKeyboardNavigation = true,
        border,
        children,
        onKeyDown,
        onFocus,
        onBlur,
        onSelect,
        ...DOMProps
    } = props

    const targetedIndexRef = useRef<number>(-1)

    const [isFocused, setIsFocused] = useState(false)
    const [targetedIndex, setTargetedIndex] = useState(-1)

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

    const handleOnArrowUp = useCallback(() => {
        setTargetedIndex(current => {
            let nextIndex = current -1

            if (nextIndex < 0) {
                nextIndex = 0
            }

            return nextIndex
        })
    }, [])

    const handleOnArrowDown = useCallback(() => {
        setTargetedIndex(current => {
            let nextIndex = current +1

            if ((Children.count(children) -1) < nextIndex) {
                nextIndex = Children.count(children) -1
            }

            return nextIndex
        })
    }, [children])

    const handleOnSelect = useCallback(() => {
        if (typeof onSelect === 'function') {
            const targetedChild = getChildByIndex(children, targetedIndexRef.current)

            if (targetedChild && targetedChild?.props.value) {
                onSelect(targetedChild.props.value)
            }
        }
    }, [onSelect, children])

    const hadnleOnKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
        if (typeof onKeyDown === 'function') {
            onKeyDown(event)
        }

        if (allowKeyboardNavigation) {
            switch (event.code) {
                case 'ArrowUp': {
                    event.preventDefault()
                    handleOnArrowUp()
                    break
                }
    
                case 'ArrowDown': {
                    event.preventDefault()
                    handleOnArrowDown()
                    break
                }
    
                case 'Enter':
                case 'Space': {
                    event.preventDefault()
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
                Children.map(children, (child, idx) => {
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
        </Styled.Wrapper>
    )
})

List.displayName = 'List'

export default List