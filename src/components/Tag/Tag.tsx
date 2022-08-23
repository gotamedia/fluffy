import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Tag: Types.TagComponent = forwardRef((props, ref) => {
    const {
        label,
        size = 'normal',
        onRemove,
        disabled,
        iconProps,
        ...DOMProps
    } = props

    return (
        <Styled.Wrapper
            ref={ref}
            $size={size}
            $disabled={disabled}
            {...DOMProps}
        >
            <Styled.Label>
                {label}
            </Styled.Label>

            <Styled.Divider />

            <Styled.ClearIcon
                disabled={disabled}
                {...iconProps}
                onClick={onRemove}
            />
        </Styled.Wrapper>
    )
})

Tag.displayName = 'Tag'

export default Tag