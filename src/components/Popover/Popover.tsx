import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef
} from 'react'

import Anchor from '@components/Anchor'
import Portal from '@components/Portal'

import useDidValueChanged from '@hooks/useDidValueChanged'
import useOutsideClick from '@hooks/useOutsideClick'
import useScrollPosition from '@hooks/useScrollPosition'

import * as Types from './types'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        anchor,
        portalWhenMounted,
        onClickOutside,
        onScrollOutside,
        ...filterdProps
    } = props
    
    const contentRef = useRef<HTMLDivElement | null>(null)
    
    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

    const position = useScrollPosition()

    const positionValue = show ? position : undefined

    const positionCompare = useCallback((prev: typeof positionValue, curr: typeof positionValue) => {
        return [prev, curr].includes(undefined)
    }, [])

    const didScrollPositionChanged = useDidValueChanged(positionValue, positionCompare)

    useEffect(() => {
        if (show && onScrollOutside && typeof onScrollOutside === 'function') {
            if (didScrollPositionChanged) {
                onScrollOutside()
            }
        }
    }, [
        show,
        onScrollOutside,
        didScrollPositionChanged
    ])

    const handleOnClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
        if (typeof onClickOutside === 'function' && !anchor?.contains(event.target as Node)) {
            onClickOutside(event)
        }
    }, [anchor, onClickOutside])

    useOutsideClick(contentRef, handleOnClickOutside)

    return (
        show ? (
            <Portal portalWhenMounted={portalWhenMounted}>
                <Anchor
                    ref={contentRef}
                    anchor={anchor}
                    {...filterdProps}
                >
                    {children}
                </Anchor>
            </Portal>
        ) : (
            null
        )
    )
})

Popover.displayName = 'Popover'

export default Popover


