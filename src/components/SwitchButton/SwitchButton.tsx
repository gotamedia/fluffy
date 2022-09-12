import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const SwitchButton: Types.SwitchButtonComponent = forwardRef((props, ref) => {
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

    const className = classNames({
        'fluffy-switch-button': true,
        [DOMProps.className || '']: true
    })

    const componentState = {
        disabled: disabled
    }

    return (
        <Styled.Wrapper>
            <Styled.SwitchButton
                ref={ref}
                $size={size}
                disabled={disabled}
                onChange={handleOnChange}
                {...DOMProps}
                className={className}
                type={'checkbox'}
            />

            {
                label ? (
                    <Styled.Text $componentState={componentState}>
                        {label}
                    </Styled.Text>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

SwitchButton.displayName = 'SwitchButton'

export default SwitchButton