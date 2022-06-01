import { EmailI18n } from "./components/Validation/Field/Email/i18nTypes"
import { SameValueI18n } from "./components/Validation/Form/SameValue/i18nTypes"
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

type FormDataValue = string | boolean | undefined

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
            field?: {
                email?: EmailI18n
            }
            form?: {
                sameValue?: SameValueI18n
            }
        }
    }

    export interface HookProps {
        i18n: I18n
        defaultValue?: FormData
        onChange?: (fieldName: string, value: FormDataValue) => void
        value?: FormData
    }

    export interface Value {
        addFieldValidation: (
            validationName: string,
            fieldName: string,
            validationFunction: Validation.Field.Function
        ) => void
        addFormValidation: (
            validationName: string,
            involvedFieldNames: string[],
            validationFunction: Validation.Form.Function
        ) => void
        addValidationMessages: (fieldName: string, validationMessages: Validation.Message[]) => void
        clearAllValidationMessages: () => void
        clearValidationMessages: (fieldName: string) => void
        i18n: I18n
        initializeField: (fieldName: string, defaultValue: FormDataValue) => void
        getButtonLabel: (buttonType: ButtonTypes) => string | undefined
        getFieldLabel: (fieldName: string) => string | undefined
        getFieldValidationMessages: (fieldName: string) => Validation.Message[]
        getFieldValue: (fieldName: string) => FormDataValue | undefined
        getFormData: () => FormData
        removeFieldValidation: (validationName: string) => void
        removeFormValidation: (validationName: string) => void
        setFieldValue: (fieldName: string, value: FormDataValue) => void
        terminateField: (fieldName: string) => void
        validateField: (fieldName: string, formData: FormData) => Validation.Message[]
        validateForm: (formData: FormData) => Validation.Message[]
    }

    export interface ReducerState {
        i18n: I18n
        formData: FormData
        validations: {
            field: Validation.Field.StoredValidation[]
            form: Validation.Form.StoredValidation[]
        }
    }

    export enum ReducerActionTypes {
        AddFieldValidation = "ADD_FIELD_VALIDATION",
        AddFormValidation = "ADD_FORM_VALIDATION",
        AddValidationMessages = "ADD_VALIDATION_MESSAGES",
        ClearAllValidationMessages = "CLEAR_ALL_VALIDATION_MESSAGES",
        ClearValidationMessages = "CLEAR_VALIDATION_MESSAGES",
        InitializeFormDataField = "INITIALIZE_FORM_DATA_FIELD",
        RemoveFieldValidation = "REMOVE_FIELD_VALIDATION",
        RemoveFormValidation = "REMOVE_FORM_VALIDATION",
        SetFormData = "SET_FORM_DATA",
        SetFormDataFieldValue = "SET_FORM_DATA_FIELD_VALUE",
        TerminateFormDataField = "TERMINATE_FORM_DATA_FIELD"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace FieldContext {
    export interface Value {
        addValidation: (validationName: string, validationFunction: Validation.Field.Function) => void
        initialize: (fieldName: string, defaultValue: FormDataValue) => void
        isRequired?: boolean
        label?: string
        fieldName?: string
        removeValidation: (validationName: string) => void
        setIsRequired: (isRequired: boolean) => void
        setFieldName: (fieldName: string) => void
        terminate: (fieldName: string) => void
        validate: () => void
    }

    export interface ReducerState {
        fieldName?: string
        label?: string
        isRequired?: boolean
    }

    export enum ReducerActionTypes {
        SetFieldName = "SET_FIELD_NAME",
        SetLabel = "SET_LABEL",
        SetIsRequired = "SET_IS_REQUIRED"
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
        fieldName: string,
        involvedFieldNames?: string[],
        type: Types,
        text?: string
    }

    export namespace Field {
        export type Function = (value: FormDataValue, fieldName: string) => Message[]

        export interface StoredValidation {
            validationName: string,
            fieldName: string,
            validationFunction: Function
        }
    }

    export namespace Form {
        export type Function = (formData: FormData) => Message[]

        export interface StoredValidation {
            validationName: string,
            involvedFieldNames: string[],
            validationFunction: Function
        }
    }
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
