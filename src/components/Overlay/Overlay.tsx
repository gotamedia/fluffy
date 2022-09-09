import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import * as Styled from './style'
import * as Types from './types'

const Overlay: Types.OverlayComponent = forwardRef((props, ref) => {
    const {
        variant = 'normal',
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

export default Overlay