import {
    forwardRef,
    useCallback,
    useRef,
    useImperativeHandle
} from 'react'

import Portal from '@components/Portal'
import Anchor from '@components/Anchor'

import useOutsideClick from '@hooks/useOutsideClick'

import * as Types from './types'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        onClickOutside,
        anchor,
        ...filterdProps
    } = props
    
    const contentRef = useRef<HTMLDivElement | null>(null)
    
    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)

    const handleOnClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
        if (typeof onClickOutside === 'function' && !anchor?.contains(event.target as Node)) {
            onClickOutside(event)
        }
    }, [anchor, onClickOutside])

    useOutsideClick(contentRef, handleOnClickOutside)

    return (
        show ? (
            <Portal>
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
