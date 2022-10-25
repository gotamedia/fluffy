import { forwardRef } from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import type * as Types from './types'

export const Container: Types.ContainerComponent = forwardRef((props, ref) => {
    const {
        children,
        backdrop,
        ...filteredProps
    } = props

    const className = classNames({
        'fluffy-container': true,
        [filteredProps.className || '']: true
    })

    return (
        <Styled.Wrapper
            ref={ref}
            $backdrop={backdrop}
            {...filteredProps}
            className={className}
        >
            {children}
        </Styled.Wrapper>
    )
})

Container.displayName = 'Container'

export default WithThemeProps(Container) as Types.ContainerComponent