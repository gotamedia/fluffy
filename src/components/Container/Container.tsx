import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Container: Types.ContainerComponent = forwardRef((props, ref) => {
    const {
        children,
        backdrop = 'medium',
        ...filteredProps
    } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $backdrop={backdrop}
            {...filteredProps}
        >
            {children}
        </Styled.Wrapper>
    )
})

Container.displayName = 'Container'

export default Container