import {
    forwardRef,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Textarea: Types.TextareaComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        onChange,
        onValueChange,
        ...DOMProps
    } = props

    const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onValueChange === 'function') {
            onValueChange(event.target.value)
        }
    }, [onChange, onValueChange])

    return (
        <Styled.Textarea
            ref={ref}
            $size={size}
            $variant={variant}
            onChange={handleOnChange}
            {...DOMProps}
        />
    )
})

export default Textarea