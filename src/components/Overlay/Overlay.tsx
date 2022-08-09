import { forwardRef } from 'react'

import * as Styled from './style'
import * as Types from './types'

const Overlay: Types.OverlayComponent = forwardRef((props, ref) => {
    const {
        variant = 'normal',
        children,
        ...DOMProps
    } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $variant={variant}
            {...DOMProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

Overlay.displayName = 'Overlay'

export default Overlay