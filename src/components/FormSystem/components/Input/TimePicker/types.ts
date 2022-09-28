import { TimePickerProps as PlainTimePickerProps, TimePickerRef } from "@components/TimePicker"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type TimePickerProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & Omit<PlainTimePickerProps, "onChange"> & Partial<Pick<PlainTimePickerProps, "onChange">>>

export type TimePickerComponent = ForwardRefExoticComponent<TimePickerProps & RefAttributes<TimePickerRef>>

export type ComponentType = TimePickerComponent
