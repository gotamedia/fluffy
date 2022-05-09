import {
    forwardRef,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'

const Input: Types.InputComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        onChange,
        onValueChange,
        ...DOMProps
    } = props

    const handleOnChange = useCallback((event) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onValueChange === 'function') {
            onValueChange(event.target.value)
        }
    }, [onChange, onValueChange])

    return (
        <Styled.Input
            ref={ref}
            $size={size}
            $variant={variant}
            onChange={handleOnChange}
            {...DOMProps}
        />
    )
})

export default Input