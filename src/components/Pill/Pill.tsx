import {
    forwardRef
} from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Pill: Types.PillComponent = forwardRef((props, ref) => {
    const {
        variant = 'alert',
        size = "small",
        shape = "rectangle",
        children,
        ...DOMProps
    } = props

    return (
        <Styled.Pill
            ref={ref}
            $variant={variant}
            $shape={shape}
            $size={size}
            {...DOMProps}
        >
            {children}
        </Styled.Pill>
    )
})

Pill.displayName = 'Pill'

export default Pill