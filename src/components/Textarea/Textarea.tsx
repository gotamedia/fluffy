import {
    forwardRef,
    useCallback
} from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

export const Textarea: Types.TextareaComponent = forwardRef((props, ref) => {
    const {
        size,
        variant,
        onChange,
        onValueChange,
        label,
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

    const className = classNames({
        'fluffy-textarea': true,
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

            <Styled.Textarea
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

Textarea.displayName = 'Textarea'

export default WithThemeProps(Textarea) as Types.TextareaComponent