import { LengthI18n } from "@components/FormSystem/components/Validation/Field/Length/i18nTypes"
import { SSNI18n } from "@components/FormSystem/components/Validation/Field/SSN/i18nTypes"
import { DefaultTheme } from "styled-components"
import { EmailI18n } from "./components/Validation/Field/Email/i18nTypes"
import { RequiredI18n } from "./components/Validation/Field/Required/i18nTypes"
import { SameValueI18n } from "./components/Validation/Form/SameValue/i18nTypes"
import React from "react"
import { ButtonProps as Button } from "./components/Button/types"
import { FieldProps as Field } from "./components/Field/types"
import { FormProps as Form } from "./components/Form/types"
import { GroupProps as Group } from "./components/Group/types"
import * as Component from "./components/types"

interface Action<T> {
    type: T,
    payload: any
}

type ButtonTypes = "submit" | "cancel" | "delete"

type FormDataValue = string | boolean | undefined

interface FormDataField {
    name: string,
    value: FormDataValue,
    validationMessages?: Validation.MessageWithId[],
    requiresValidation?: boolean
}

interface FormData {
    [key: string]: FormDataField
}

namespace InputLogic {
    export interface HookProps {
        defaultValue: FormDataValue,
        disabled?: boolean,
        name: string
    }

    export interface Value {
        clearValidationMessages: (fieldName: string, types?: Validation.Types[] | "all") => void,
        disabled: boolean,
        getFieldValue: (fieldName: string) => FormDataValue | undefined,
        onBlur: () => void,
        setFieldValue: (
            fieldName: string,
            value: FormDataValue,
            requiresValidation?: boolean,
            isManualChange?: boolean
        ) => void
        theme: DefaultTheme,
        validationType: Validation.Types | undefined,
        value: FormDataValue | undefined
    }
}

namespace FormContext {
    export namespace Events {
        export type onCancel = (
            formData: FormData,
            endCancellationState: () => void
        ) => void

        export type onChange = (
            fieldName: string,
            value: FormDataValue,
            valid: boolean | undefined,
            isManualChange: boolean,
            formData: FormData,
            setFieldValue: (
                fieldName: string,
                value: FormDataValue,
                requiresValidation: boolean
            ) => void
        ) => void

        export type onDelete = (
            formData: FormData,
            endDeletionState: () => void
        ) => void

        export type onSubmit = (
            formData: FormData,
            isValid: boolean,
            validationMessages: Validation.Message[],
            endSubmissionState: () => void
        ) => void
    }

    export interface I18n {
        fields?: {
            [key: string]: string
        }
        buttons?: {
            [key in ButtonTypes]?: string
        },
        validations?: {
            field?: {
                email?: EmailI18n,
                length?: LengthI18n,
                required?: RequiredI18n,
                ssn?: SSNI18n
            }
            form?: {
                sameValue?: SameValueI18n
            }
        }
    }

    export interface HookProps {
        i18n: I18n
        defaultValue?: FormData
        disabled?: boolean
        onCancel?: Events.onCancel
        onChange?: Events.onChange
        onDelete?: Events.onDelete
        value?: FormData
    }

    export interface Value extends ReducerState {
        addFieldValidation: (
            validationId: string,
            fieldName: string,
            validationFunction: Validation.Field.Function
        ) => void
        addFormValidation: (
            validationId: string,
            involvedFieldNames: string[],
            validationFunction: Validation.Form.Function
        ) => void
        addValidationMessages: (fieldName: string, validationMessages: Validation.MessageWithId[]) => void
        clearAllValidationMessages: (types?: Validation.Types[] | "all") => void
        clearValidationMessages: (fieldName: string, types?: Validation.Types[] | "all") => void
        disabled: boolean
        initializeField: (fieldName: string, defaultValue: FormDataValue) => void
        isActing: boolean
        getButtonLabel: (buttonType: ButtonTypes) => string | undefined
        getFieldLabel: (fieldName: string) => string | undefined
        getFieldValidationMessages: (fieldName: string) => Validation.Message[]
        getHighestValidationMessageType: (fieldName: string) => Validation.Types | undefined
        getFieldValue: (fieldName: string) => FormDataValue | undefined
        getFormData: () => FormData
        removeFieldValidation: (fieldName: string, validationId: string) => void
        removeFormValidation: (validationId: string) => void
        setFieldValue: (
            fieldName: string,
            value: FormDataValue,
            requiresValidation?: boolean,
            isManualChange?: boolean
        ) => void
        setIsCanceling: (isCanceling: boolean) => void
        setIsDeleting: (isDeleting: boolean) => void
        setIsSubmitting: (isSubmitting: boolean) => void
        terminateField: (fieldName: string) => void
        validateField: (fieldName: string, formData: FormData) => Validation.Message[]
        validateForm: (formData: FormData) => Validation.Message[]
    }

    export enum Types {
        Create = "create",
        Update = "update"
    }

    export interface ReducerState {
        formData: FormData
        i18n: I18n
        isCanceling: boolean
        isDeleting: boolean
        isSubmitting: boolean
        onCancel?: Events.onCancel
        onDelete?: Events.onDelete
        type: Types
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
        ResetFieldRequiresValidation = "RESET_FIELD_REQUIRES_VALIDATION",
        SetFormData = "SET_FORM_DATA",
        SetFormDataFieldValue = "SET_FORM_DATA_FIELD_VALUE",
        SetIsCanceling = "SET_IS_CANCELING",
        SetIsDeleting = "SET_IS_DELETING",
        SetIsSubmitting = "SET_IS_SUBMITTING",
        TerminateFormDataField = "TERMINATE_FORM_DATA_FIELD"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace FieldContext {
    export interface Value {
        addValidation: (validationId: string, validationFunction: Validation.Field.Function) => void
        initialize: (fieldName: string, defaultValue: FormDataValue) => void
        isRequired?: boolean
        label: string
        fieldName?: string
        removeValidation: (validationId: string) => void
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
        SetIsRequired = "SET_IS_REQUIRED"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace Validation {
    /**
     * Those types are in a priority order from important to unimportant
     */
    export enum Types {
        Error = "error",
        Warning = "warning",
        Success = "success",
        Loading = "loading",
        Hint = "hint"
    }

    export interface Message {
        fieldName: string,
        involvedFieldNames?: string[],
        type: Types,
        text?: string
    }

    export interface MessageWithId extends Message {
        validationId: string
    }

    export interface Groups {
        [key: string]: Validation.Message[]
    }

    export namespace Field {
        export type Function = (value: FormDataValue, fieldName: string) => Message[]

        export interface StoredValidation {
            validationId: string,
            fieldName: string,
            validationFunction: Function
        }
    }

    export namespace Form {
        export type Function = (formData: FormData) => Message[]

        export interface StoredValidation {
            validationId: string,
            involvedFieldNames: string[],
            validationFunction: Function
        }
    }
}

export {
    Button,
    Component,
    Field,
    Form,
    Group,
    InputLogic,
    FormData,
    FormDataField,
    FormDataValue,
    ButtonTypes,
    FormContext,
    FieldContext,
    Validation
}
