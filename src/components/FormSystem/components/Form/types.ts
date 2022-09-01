import { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"
import type * as Types from "../../types"

export type FormProps = PropsWithChildren<{
    defaultValue?: Types.FormData
    disabled?: boolean
    i18n: Types.FormContext.I18n
    initialValue?: Types.FormData
    onChange?: Types.FormContext.Events.onChange
    onCancel?: Types.FormContext.Events.onCancel
    onDelete?: Types.FormContext.Events.onDelete
    onSubmit?: Types.FormContext.Events.onSubmit
} & Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">>

export type FormRef = HTMLFormElement

export type FormComponent = ForwardRefExoticComponent<FormProps & RefAttributes<FormRef>>

export type ComponentType = FormComponent
