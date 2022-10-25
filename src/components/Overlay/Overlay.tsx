import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import * as Types from './types'

export const Overlay: Types.OverlayComponent = forwardRef((props, ref) => {
    const {
        variant,
        children,
        ...DOMProps
    } = props

    const className = classNames({
        'fluffy-overlay': true,
        [DOMProps.className || '']: true
    })

    return (
        <Styled.Wrapper
            ref={ref}
            $variant={variant}
            {...DOMProps}
            className={className}
        >
            {children}
        </Styled.Wrapper>
    )
})

Overlay.displayName = 'Overlay'

export default WithThemeProps(Overlay) as Types.OverlayComponent