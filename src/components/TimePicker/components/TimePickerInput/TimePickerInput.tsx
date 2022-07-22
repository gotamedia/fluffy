import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const DatePickerInput: Types.TimePickerInputComponent = forwardRef((props, ref) => {
    const {
        isClearable = false,
        onClear,
        value,
        onClick,
        ...filteredProps
    } = props

    return (
        <Styled.InputGroup>
            <Styled.Input
                ref={ref}
                onClick={onClick}
                value={value}
                {...filteredProps}
            />

            {
                isClearable && value ? (
                    <Styled.ClearIcon onClick={onClear} />
                ) : (
                    <Styled.ClockIcon onClick={onClick} />
                )
            }
        </Styled.InputGroup>
    )
})

export default DatePickerInput