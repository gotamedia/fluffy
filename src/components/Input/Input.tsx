import {
    forwardRef,
    useCallback
} from 'react'

import {
    InputVariants,
    InputVariantTypes,
    InputSizes,
    InputStates
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Input: Types.InputComponent = forwardRef((props, ref) => {
    const {
        size = InputSizes.Normal,
        variant = InputVariants.Primary,
        variantType = InputVariantTypes.Default,
        state = InputStates.Default,
        label,
        onChange,
        onValueChange,
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
                $variantType={variantType}
                $state={state}
                onChange={handleOnChange}
                {...DOMProps}
            />
        </>
    )
})

Input.displayName = 'Input'

export default Input