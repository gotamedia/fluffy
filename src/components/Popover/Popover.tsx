import {
    MouseEventHandler,
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle
} from 'react'

import Portal from '@components/Portal'
import Anchor from '@components/Anchor'

import * as Types from './types'
import useOutsideClick from '@hooks/useOutsideClick'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        onClickOutside,
        anchor,
        ...filterdProps
    } = props
    const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null)

    const handleOnClickOutside = useCallback<MouseEventHandler<HTMLDivElement>>((event) => {
        if (typeof onClickOutside === 'function' && !anchor?.contains(event.target as Node)) {
            onClickOutside(event)
        }
    }, [anchor, onClickOutside])

    useImperativeHandle(ref, () => contentElement as HTMLDivElement, [contentElement])
    useOutsideClick(contentElement, handleOnClickOutside)

    return (
        show ? (
            <Portal>
                <Anchor
                    ref={setContentElement}
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
