import type {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ReactDatePicker, ReactDatePickerProps } from 'react-datepicker'

import type { InputProps } from '../Input'

export interface TimePickerProps extends ReactDatePickerProps {
    inputProps?: InputProps
}

export type TimePickerRef = ReactDatePicker

export type TimePickerComponent = ForwardRefExoticComponent<TimePickerProps & RefAttributes<TimePickerRef>>