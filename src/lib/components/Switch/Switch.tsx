import { ChangeEventHandler, forwardRef, useCallback } from "react"

import * as Styled from "./style"
import type * as Types from "./types"

const Switch: Types.SwitchComponent = forwardRef((props, ref) => {
    const {
        disabled,
        invalid,
        label,
        onChange,
        onValueChange,
        size = 'normal',
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
            <Styled.Switch $size={size}>
                <Styled.Input
                    ref={ref}
                    $size={size}
                    disabled={disabled}
                    onChange={handleOnChange}
                    {...DOMProps}
                    type={'checkbox'}
                />
                <Styled.Slider $size={size} $invalid={invalid} />
            </Styled.Switch>
            <Styled.Text>
                {label}
            </Styled.Text>
        </Styled.Wrapper>
    )
})

Switch.displayName = "Switch"

export default Switch
