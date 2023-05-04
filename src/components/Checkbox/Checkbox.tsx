import {
    useRef,
    forwardRef,
    useImperativeHandle,
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
import type {
    ChangeEventHandler,
    MouseEventHandler
} from 'react'

const Checkbox: Types.CheckboxComponent = forwardRef((props, ref) => {
    const {
        size = CheckboxSizes.Normal,
        variant = CheckboxVariants.Primary,
        variantType = CheckboxVariantTypes.Default,
        state = CheckboxStates.Default,
        label,
        className,
        disabled,
        checked = false,
        indeterminate = false,
        onChange,
        onValueChange,
        ...DOMProps
    } = props

    const checkboxRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => {
        return checkboxRef.current as HTMLInputElement
    }, [])

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        if (typeof onValueChange === 'function') {
            onValueChange(event.target.checked)
        }
    }, [onChange, onValueChange])

    const handleOnLabelClick: MouseEventHandler<HTMLInputElement> = useCallback(() => {
        if (!disabled && checkboxRef?.current) {
            checkboxRef.current.click()
        }
    }, [disabled])

    return (
        <Styled.Wrapper className={className}>
            <Styled.Checkbox
                {...DOMProps}
                ref={checkboxRef}
                $size={size}
                $variant={variant}
                $variantType={variantType}
                $state={state}
                disabled={disabled}
                checked={checked || indeterminate}
                onChange={handleOnChange}
                data-indeterminate={indeterminate}
                type={'checkbox'}
            />

            {
                label ? (
                    <Styled.Text
                        $state={state}
                        $disabled={disabled}
                        onClick={handleOnLabelClick}
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