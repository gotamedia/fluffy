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
        variant = 'primary',
        variantType = 'default',
        state = 'default',
        label,
        onChange,
        onValueChange,
        disabled,
        indeterminate = false,
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
                {...DOMProps}
                ref={ref}
                $size={size}
                $variant={variant}
                $variantType={variantType}
                $state={state}
                disabled={disabled}
                onChange={handleOnChange}
                data-indeterminate={indeterminate}
                type={'checkbox'}
            />

            {
                label ? (
                    <Styled.Text
                        $state={state}
                        $disabled={disabled}
                    >
                        {label}
                    </Styled.Text>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox