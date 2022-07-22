import type {
    ForwardRefExoticComponent,
    RefAttributes
} from 'react'

import type { ReactDatePicker, ReactDatePickerProps } from 'react-datepicker'

import type { InputProps } from '../Input'

export interface DatePickerProps extends ReactDatePickerProps {
    inputProps?: InputProps
}

export type DatePickerRef = ReactDatePicker

export type DatePickerComponent = ForwardRefExoticComponent<DatePickerProps & RefAttributes<DatePickerRef>>