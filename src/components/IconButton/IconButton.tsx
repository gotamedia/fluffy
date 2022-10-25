import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import Icon from '../Icon'

import * as Styled from './style'
import type * as Types from './types'

export const IconButton: Types.IconButtonComponent = forwardRef((props, ref) => {
    const {
        size,
        variant,
        shape,
        icon,
        ...DOMProps
    } = props
    
    const className = classNames({
        'fluffy-icon-button': true,
        [DOMProps.className || '']: true
    })

    return (
        <Styled.IconButton
            ref={ref}
            $size={size}
            $variant={variant}
            $shape={shape}
            {...DOMProps}
            className={className}
        >
            <Icon
                size={size}
                icon={icon}
            />
        </Styled.IconButton>
    )
})

IconButton.displayName = 'IconButton'

export default WithThemeProps(IconButton) as Types.IconButtonComponent