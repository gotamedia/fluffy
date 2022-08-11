import React, { PropsWithChildren } from "react"
import * as Types from "../../types"

export type FormProps = PropsWithChildren<{
    defaultValue?: Types.FormData
    disabled?: boolean
    i18n: Types.FormContext.I18n
    initialValue?: Types.FormData
    onChange?: Types.FormContext.Events.onChange
    onCancel?: Types.FormContext.Events.onCancel
    onDelete?: Types.FormContext.Events.onDelete
    onSubmit?: Types.FormContext.Events.onSubmit
}>

export type FormComponent = React.FC<FormProps>

export type ComponentType = FormComponent
