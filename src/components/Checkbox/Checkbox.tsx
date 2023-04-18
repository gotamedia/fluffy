import {
    forwardRef,
    useCallback
} from 'react'

import {
    CheckboxSizes,
    CheckboxStates,
    CheckboxVariants,
    CheckboxVariantTypes
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Checkbox: Types.CheckboxComponent = forwardRef((props, ref) => {
    const {
        size = CheckboxSizes.Normal,
        variant = CheckboxVariants.Primary,
        variantType = CheckboxVariantTypes.Default,
        state = CheckboxStates.Default,
        label,
        onChange,
        onValueChange,
        disabled,
        indeterminate = false,
        className,
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
        <Styled.Wrapper className={className}>
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