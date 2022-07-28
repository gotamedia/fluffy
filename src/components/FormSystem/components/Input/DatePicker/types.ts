import { DatePickerProps as PlainDatePickerProps } from "@components/DatePicker"
import React, { PropsWithChildren } from "react"

export type DatePickerProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & Omit<PlainDatePickerProps, "onChange"> & Partial<Pick<PlainDatePickerProps, "onChange">>>

export type DatePickerComponent = React.FC<DatePickerProps>

export type ComponentType = DatePickerComponent
