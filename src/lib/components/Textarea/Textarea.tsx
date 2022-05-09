import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Textarea: Types.TextareaComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        ...DOMProps
    } = props

    return (
        <Styled.Textarea
            ref={ref}
            $size={size}
            $variant={variant}
            {...DOMProps}
        />
    )
})

export default Textarea