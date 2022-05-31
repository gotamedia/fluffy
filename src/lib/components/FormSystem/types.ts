import { EmailI18n } from "./components/Validation/Email/i18nTypes"
import React from "react"
import { SubmitButtonProps as Button } from "./components/Button/types"
import { FieldProps as Field } from "./components/Field/types"
import { FormProps as Form } from "./components/Form/types"
import { GroupProps as Group } from "./components/Group/types"
import * as Input from "./components/Input/types"

interface Action<T> {
    type: T,
    payload: any
}

type ButtonTypes = "submit" | "cancel" | "delete"

type FormDataValue = string | boolean

interface FormDataField {
    name: string
    value: FormDataValue
    validationMessages?: Validation.Message[]
}

interface FormData {
    [key: string]: FormDataField
}

namespace FormContext {
    export interface I18n {
        fields?: {
            [key: string]: string
        }
        buttons?: {
            [key in ButtonTypes]?: string
        },
        validations?: {
            email?: EmailI18n
        }
    }

    export interface HookProps {
        i18n: I18n
        defaultValue?: FormData
        onChange?: (fieldName: string, value: FormDataValue) => void
        value?: FormData
    }

    export interface Value {
        addValidationMessages: (fieldName: string, validationMessages: Validation.Message[]) => void
        clearValidationMessages: (fieldName: string) => void
        i18n: I18n
        initializeField: (fieldName: string, defaultValue: FormDataValue) => void
        getButtonLabel: (buttonType: ButtonTypes) => string | undefined
        getFieldLabel: (fieldName: string) => string | undefined
        getFieldValidationMessages: (fieldName: string) => Validation.Message[]
        getFieldValue: (fieldName: string) => FormDataValue | undefined
        getFormData: () => FormData
        setFieldValue: (fieldName: string, value: FormDataValue) => void
        terminateField: (fieldName: string) => void
    }

    export interface ReducerState {
        i18n: I18n
        formData: FormData
    }

    export enum ReducerActionTypes {
        AddFormDataFieldValidationMessages = "ADD_FORM_DATA_FIELD_VALIDATION_MESSAGES",
        ClearFormDataFieldValidationMessages = "CLEAR_FORM_DATA_FIELD_VALIDATION_MESSAGES",
        InitializeFormDataField = "INITIALIZE_FORM_DATA_FIELD",
        SetFormData = "SET_FORM_DATA",
        SetFormDataFieldValue = "SET_FORM_DATA_FIELD_VALUE",
        TerminateFormDataField = "TERMINATE_FORM_DATA_FIELD"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace FieldContext {
    export interface Value {
        addValidation: (name: string, validationFunction: Validation.Function) => void
        initialize: (fieldName: string, defaultValue: FormDataValue) => void
        isRequired?: boolean
        label?: string
        name?: string
        removeValidation: (name: string) => void
        setIsRequired: (isRequired: boolean) => void
        setName: (name: string) => void
        terminate: (fieldName: string) => void
        validate: Validation.Function
    }

    export interface ReducerState {
        name?: string
        label?: string
        isRequired?: boolean
        validations: Validation.StoredValidation[]
    }

    export enum ReducerActionTypes {
        SetName = "SET_NAME",
        SetLabel = "SET_LABEL",
        SetIsRequired = "SET_IS_REQUIRED",
        AddValidation = "ADD_VALIDATION",
        RemoveValidation = "REMOVE_VALIDATION"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace Validation {
    export enum Types {
        Error = "Error",
        Warning = "Warning"
    }

    export interface Message {
        type: Types,
        text?: string
    }

    export type Function = (value: FormDataValue, name: string) => Message[]

    export type StoredValidation = { name: string, validation: Function }
}

export {
    Button,
    Field,
    Form,
    Group,
    Input,
    FormData,
    FormDataField,
    FormDataValue,
    ButtonTypes,
    FormContext,
    FieldContext,
    Validation
}
