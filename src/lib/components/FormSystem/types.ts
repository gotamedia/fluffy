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

interface FormData {
    [key: string]: FormDataValue
}

namespace FormContext {
    export interface I18n {
        fields?: {
            [key: string]: string
        }
        buttons?: {
            [key in ButtonTypes]?: string
        }
    }

    export interface HookProps {
        i18n: I18n
        defaultValue?: FormData
        onChange?: (fieldName: string, value: FormDataValue) => void
        value?: FormData
    }

    export interface Value {
        i18n: I18n
        getButtonLabel: (buttonType: ButtonTypes) => string | undefined
        getFieldLabel: (fieldName: string) => string | undefined
        getFieldValue: (fieldName: string) => FormDataValue | undefined
        getFormData: () => FormData
        updateFormData: (fieldName: string, value: FormDataValue) => void
    }

    export interface ReducerState {
        i18n: I18n
        formData: FormData
    }

    export enum ReducerActionTypes {
        UpdateFormData = "UPDATE_FORM_DATA",
        SetFormData = "SET_FORM_DATA"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

namespace FieldContext {
    export interface Value {
        name?: string
        isRequired?: boolean
        setName: (name: string) => void
        setIsRequired: (isRequired: boolean) => void
    }

    export interface ReducerState {
        name?: string
        isRequired?: boolean
    }

    export enum ReducerActionTypes {
        SetName = "SET_NAME",
        SetIsRequired = "SET_IS_REQUIRED"
    }

    export type ReducerAction = Action<ReducerActionTypes>

    export type Reducer = React.Reducer<ReducerState, ReducerAction>
}

export {
    Button,
    Field,
    Form,
    Group,
    Input,
    FormData,
    FormDataValue,
    ButtonTypes,
    FormContext,
    FieldContext
}
