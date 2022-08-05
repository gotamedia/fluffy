import {
    forwardRef,
    useCallback
} from 'react'

import Portal from '@components/Portal'
import Anchor from '@components/Anchor'
import Overlay from '@components/Overlay'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
    const {
        children,
        show,
        anchorProps,
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
        <Styled.Wrapper
            ref={ref}
            {...filterdProps}
        >
            {
                show ? (
                    <Portal>
                        <Overlay
                            {...overlayProps}
                            onClick={handleOnClickOutside}
                        />

                        <Anchor {...anchorProps}>
                            {children}
                        </Anchor>
                    </Portal>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

Popover.displayName = 'Popover'

export default Popover