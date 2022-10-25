import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

export const Radio: Types.RadioComponent = forwardRef((props, ref) => {
    const {
        size,
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
        'fluffy-radio': true,
        [DOMProps.className || '']: true
    })

    const componentState = {
        disabled: disabled
    }

    return (
        <Styled.Wrapper>
            <Styled.Radio
                ref={ref}
                $size={size}
                disabled={disabled}
                onChange={handleOnChange}
                {...DOMProps}
                className={className}
                type={'radio'}
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

Radio.displayName = 'Radio'

export default WithThemeProps(Radio) as Types.RadioComponent