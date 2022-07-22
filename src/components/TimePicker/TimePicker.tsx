import { forwardRef } from 'react'

import TimePickerInput from './components/TimePickerInput'

import * as Styled from './style'
import type * as Types from './types'

const TimePicker: Types.TimePickerComponent = forwardRef((props, ref) => {
    const {
        timeIntervals = 15,
        timeCaption = 'Time',
        dateFormat = 'p',
        inputProps,
        calendarClassName,
        onClear,
        isClearable = false,
        ...filteredProps
    } = props

    return (
        <Styled.DatePicker
            ref={ref}
            timeIntervals={timeIntervals}
            timeCaption={timeCaption}
            dateFormat={dateFormat}
            isClearable={isClearable}
            onClear={onClear}
            customInput={(
                <TimePickerInput
                    {...inputProps}
                    isClearable={isClearable}
                    onClear={onClear}
                />
            )}
            {...filteredProps}
            showTimeSelect
            showTimeSelectOnly
            calendarClassName={`${calendarClassName ? calendarClassName : ''} fluffy-time-picker`}
        />
    )
})

TimePicker.displayName = 'TimePicker'

export default TimePicker