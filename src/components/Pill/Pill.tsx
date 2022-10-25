import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import type * as Types from './types'

export const Pill: Types.PillComponent = forwardRef((props, ref) => {
    const {
        variant,
        size,
        shape,
        children,
        ...DOMProps
    } = props

    const className = classNames({
        'fluffy-pill': true,
        [DOMProps.className || '']: true
    })

    return (
        <Styled.Pill
            ref={ref}
            $variant={variant}
            $shape={shape}
            $size={size}
            {...DOMProps}
            className={className}
        >
            {children}
        </Styled.Pill>
    )
})

Pill.displayName = 'Pill'

export default WithThemeProps(Pill) as Types.PillComponent