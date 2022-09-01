import { DatePickerProps as PlainDatePickerProps, DatePickerRef } from "@components/DatePicker"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type DatePickerProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & Omit<PlainDatePickerProps, "onChange"> & Partial<Pick<PlainDatePickerProps, "onChange">>>

export type DatePickerComponent = ForwardRefExoticComponent<DatePickerProps & RefAttributes<DatePickerRef>>

export type ComponentType = DatePickerComponent
