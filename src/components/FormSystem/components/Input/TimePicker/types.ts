import { TimePickerProps as PlainTimePickerProps } from "@components/TimePicker"
import React, { PropsWithChildren } from "react"

export type TimePickerProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & Omit<PlainTimePickerProps, "onChange"> & Partial<Pick<PlainTimePickerProps, "onChange">>>

export type TimePickerComponent = React.FC<TimePickerProps>

export type ComponentType = TimePickerComponent
