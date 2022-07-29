import { forwardRef } from 'react'

import * as Styled from './style'
import type * as Types from './types'

const DatepickerInput: Types.DatePickerInputComponent = forwardRef((props, ref) => {
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
                value={value}
                onClick={onClick}
                {...filteredProps}
            />

            {
                isClearable && value ? (
                    <Styled.ClearIcon onClick={onClear} />
                ) : (
                    <Styled.CalendarIcon onClick={onClick} />
                )
            }
        </Styled.InputGroup>
    )
})

export default DatepickerInput