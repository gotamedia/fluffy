import React, { PropsWithChildren } from "react"
import { FormData, FormDataValue } from "../../types"
import * as Types from "../../types"

export type FormProps = PropsWithChildren<{
    defaultValue?: Types.FormData
    i18n: Types.FormContext.I18n
    onChange?: (
        fieldName: string,
        value: Types.FormDataValue,
        isManualChange: boolean,
        formData: FormData,
        setFieldValue: (fieldName: string, value: FormDataValue) => void
    ) => void
    onSubmit?: (formData: Types.FormData, isValid: boolean, validationMessages: Types.Validation.Message[]) => void
    value?: Types.FormData
}>

export type FormComponent = React.FC<FormProps>

export type ComponentType = FormComponent
