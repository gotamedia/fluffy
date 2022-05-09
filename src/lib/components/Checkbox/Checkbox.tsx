import {
    forwardRef,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Checkbox: Types.CheckboxComponent = forwardRef((props, ref) => {
    const {
        size = 'normal',
        label,
        onChange,
        onValueChange,
        disabled,
        ...DOMProps
    } = props

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onValueChange === 'function') {
            onValueChange(event.target.checked)
        }
    }, [onChange, onValueChange])

    return (
        <Styled.Wrapper>
            <Styled.Checkbox
                ref={ref}
                $size={size}
                disabled={disabled}
                onChange={handleOnChange}
                {...DOMProps}
                type={'checkbox'}
            />

            {
                label ? (
                    <Styled.Text $disabled={disabled}>
                        {label}
                    </Styled.Text>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

export default Checkbox