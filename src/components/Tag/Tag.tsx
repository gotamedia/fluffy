import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Tag: Types.TagComponent = forwardRef((props, ref) => {
    const {
        label,
        size = 'normal',
        ...DOMProps
    } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size}
            {...DOMProps}
        >
            <Styled.Label>
                {label}
            </Styled.Label>

            <Styled.Divider />

            <Styled.ClearIcon />
        </Styled.Wrapper>
    )
})

Tag.displayName = 'Tag'

export default Tag