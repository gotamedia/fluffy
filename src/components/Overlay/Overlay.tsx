import { forwardRef } from 'react'

import * as Styled from './style'
import * as Types from './types'

const Overlay: Types.OverlayComponent = forwardRef((props, ref) => {
    const {
        variant = 'normal',
        children,
        ...filterdProps
    } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $variant={variant}
            {...filterdProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

Overlay.displayName = 'Overlay'

export default Overlay