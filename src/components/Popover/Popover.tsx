import {
    MouseEventHandler,
    forwardRef,
    useCallback,
    useRef
} from 'react'

import Portal from '@components/Portal'
import Anchor from '@components/Anchor'
import Overlay from '@components/Overlay'

import * as Types from './types'
import useScrollPosition from '@hooks/useScrollPosition'
import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        overlayProps,
        onClickOutside,
        onScrollPosition,
        ...filterdProps
    } = props
    const scrollPosition = useScrollPosition()
    const prevScrollPosition = useRef(scrollPosition)


    const handleOnClickOutside = useCallback<MouseEventHandler<HTMLDivElement>>(event => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        if (typeof overlayProps?.onClick === 'function') {
            overlayProps.onClick(event)
        }
    }, [onClickOutside, overlayProps])


    useIsomorphicLayoutEffect(() => {
        if(typeof onScrollPosition === 'function') {
            const {  scrollY: prevY, scrollX: prevX } = prevScrollPosition.current
            const { scrollY, scrollX } = scrollPosition
            if (show && prevX !== scrollX || prevY !== scrollY) {
                onScrollPosition(scrollPosition)

            }
            prevScrollPosition.current = scrollPosition
        }
    }, [onScrollPosition, scrollPosition, show])


    return (
        show ? (
            <Portal>
                <Overlay
                    {...overlayProps}
                    onClick={handleOnClickOutside}
                />

                <Anchor
                    ref={ref}
                    preventScrollOutside={false}
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
