import {
    forwardRef,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Input: Types.InputComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        variant = 'primary',
        onChange,
        onValueChange,
        label,
        ...DOMProps
    } = props

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onValueChange === 'function') {
            onValueChange(event.target.value)
        }
    }, [onChange, onValueChange])

    return (
        <>
            {
                typeof label === 'string' && label.length ? (
                    <Styled.Label>
                        {label}
                    </Styled.Label>
                ) : (
                    null
                )
            }

            <Styled.Input
                ref={ref}
                $size={size}
                $variant={variant}
                onChange={handleOnChange}
                {...DOMProps}
            />
        </>
    )
})

Input.displayName = 'Input'

export default Input