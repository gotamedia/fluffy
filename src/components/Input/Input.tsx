import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

export const Input: Types.InputComponent = forwardRef((props, ref) => {
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

    const className = classNames({
        'fluffy-input': true,
        [DOMProps.className || '']: true
    })

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
                className={className}
            />
        </>
    )
})

Input.displayName = 'Input'

export default Input