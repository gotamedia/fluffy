import { Children, forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Button: Types.ButtonComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        children,
        ...DOMProps
    } = props

    return (
        <Styled.Button
            ref={ref}
            $size={size}
            $variant={variant}
            {...DOMProps}
        >
            {Children.map(children, (child) => {
                if (typeof child === 'string') {
                    return (
                        <Styled.ButtonTexts>
                            {child}
                        </Styled.ButtonTexts>
                    )
                } else {
                    return (
                        child
                    )
                }
            })}
        </Styled.Button>
    )
})

export default Button