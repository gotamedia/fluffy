import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import Portal from '@components/Portal'

import * as Styled from './style'
import * as Types from './types'
import type { MouseEventHandler } from 'react'

export const Popover: Types.PopoverComponent = forwardRef((props, ref) => {
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

    const className = classNames({
        'fluffy-popover': true,
        [filterdProps.className || '']: true
    })

    return (
        show ? (
            <Portal>
                <Styled.Overlay
                    {...overlayProps}
                    onClick={handleOnClickOutside}
                />

                <Styled.Anchor
                    ref={ref}
                    {...filterdProps}
                    className={className}
                >
                    {children}
                </Styled.Anchor>
            </Portal>
        ) : (
            null
        )
    )
})

Popover.displayName = 'Popover'

export default withThemeProps(Popover) as Types.PopoverComponent