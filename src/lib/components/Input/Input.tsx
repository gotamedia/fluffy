import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Input: Types.InputComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        ...DOMProps
    } = props

    return (
        <Styled.Input
            ref={ref}
            $size={size}
            $variant={variant}
            {...DOMProps}
        />
    )
})

export default Input