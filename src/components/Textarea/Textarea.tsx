import {
    forwardRef,
    useCallback
} from 'react'

import {
    TextareaVariants,
    TextareaVariantTypes,
    TextareaSizes,
    TextareaStates
} from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { ChangeEventHandler } from 'react'

const Textarea: Types.TextareaComponent = forwardRef((props, ref) => {
    const {
        size = TextareaSizes.Normal,
        variant = TextareaVariants.Primary,
        variantType = TextareaVariantTypes.Default,
        state = TextareaStates.Default,
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
                $variantType={variantType}
                $state={state}
                onChange={handleOnChange}
                {...DOMProps}
            />
        </>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea