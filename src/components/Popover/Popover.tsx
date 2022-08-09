import {
    forwardRef,
    useCallback
} from 'react'

import Portal from '@components/Portal'
import Anchor from '@components/Anchor'
import Overlay from '@components/Overlay'

import * as Types from './types'
import type { MouseEventHandler } from 'react'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        overlayProps,
        onClickOutside,
        ...filterdProps
    } = props

    const handleOnClickOutside = useCallback<MouseEventHandler<HTMLDivElement>>(event => {
        if (typeof onClickOutside === 'function') {
            onClickOutside(event)
        }

        if (typeof overlayProps?.onClick === 'function') {
            overlayProps.onClick(event)
        }
    }, [onClickOutside, overlayProps])

    return (
        show ? (
            <Portal>
                <Overlay
                    {...overlayProps}
                    onClick={handleOnClickOutside}
                />

                <Anchor
                    ref={ref}
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