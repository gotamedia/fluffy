import { forwardRef } from 'react'

import Icon from '../Icon'

import * as Styled from './style'
import type * as Types from './types'

const IconButton: Types.IconButtonComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        shape = 'square',
        icon,
        ...DOMProps
    } = props
    
    return (
        <Styled.IconButton
            ref={ref}
            $size={size}
            $variant={variant}
            $shape={shape}
            {...DOMProps}
        >
            <Icon
                size={size}
                icon={icon}
            />
        </Styled.IconButton>
    )
})

IconButton.displayName = 'IconButton'

export default IconButton