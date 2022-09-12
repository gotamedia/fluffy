import { forwardRef } from 'react'

import classNames from '@utils/classNames'

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

    const className = classNames({
        'fluffy-time-picker': true,
        [filteredProps.className || '']: true
    })

    const calendarClassNameValue = classNames({
        'fluffy-time-picker-calendar': true,
        [calendarClassName || '']: true
    })

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
            className={className}
            showTimeSelect
            showTimeSelectOnly
            calendarClassName={calendarClassNameValue}
        />
    )
})

TimePicker.displayName = 'TimePicker'

export default TimePicker