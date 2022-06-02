import React, { useCallback, useEffect } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import { FormData, Validation } from "../types"

const useFormContext = (props: Types.FormContext.HookProps): Types.FormContext.Value => {
    const { defaultValue, i18n, onChange, value } = props

    const [state, dispatch] = React.useReducer<Types.FormContext.Reducer>(
        Reducers.FormContextReducer,
        { i18n, formData: (value || defaultValue || {}), validations: { field: [], form: [] } }
    )

    useEffect(() => {
        // check to not overwrite the defaultValue if value is not given
        if (typeof value === "object") {
            // controlled way
            dispatch({ type: Types.FormContext.ReducerActionTypes.SetFormData, payload: value })
        }
    }, [value])

    const addFieldValidation = useCallback((
        validationName: string,
        fieldName: string,
        validationFunction: Validation.Field.Function
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFieldValidation,
            payload: { validationName, fieldName, validationFunction }
        })
    }, [])

    const addFormValidation = useCallback((
        validationName: string,
        involvedFieldNames: string[],
        validationFunction: Validation.Form.Function
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFormValidation,
            payload: { validationName, involvedFieldNames, validationFunction }
        })
    }, [])

    const addValidationMessages = useCallback((fieldName: string, validationMessages: Types.Validation.Message[]) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddValidationMessages,
            payload: { fieldName, validationMessages }
        })
    }, [])

    const clearValidationMessages = useCallback((
        fieldName: string,
        types: Types.Validation.Types[] | "all" = [Types.Validation.Types.Error]
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearValidationMessages,
            payload: { fieldName, types }
        })
    }, [])

    const clearAllValidationMessages = useCallback((
        types: Types.Validation.Types[] | "all" = [Types.Validation.Types.Error]
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearAllValidationMessages,
            payload: { types }
        })
    }, [])

    const initializeField = useCallback((fieldName: string, defaultValue: Types.FormDataValue) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.InitializeFormDataField,
            payload: { fieldName, defaultValue }
        })
    }, [])

    const getButtonLabel = useCallback((buttonType: Types.ButtonTypes) => {
        return state?.i18n?.buttons?.[buttonType]
    }, [state?.i18n?.buttons])

    const getFieldLabel = useCallback((fieldName: string) => {
        return state?.i18n?.fields?.[fieldName]
    }, [state?.i18n?.fields])

    const getFieldValidationMessages = useCallback((fieldName: string) => {
        return state?.formData?.[fieldName]?.validationMessages || []
    }, [state?.formData])

    const getFieldValue = useCallback((fieldName: string) => {
        return state?.formData?.[fieldName]?.value
    }, [state?.formData])

    const getFormData = useCallback(() => {
        return state?.formData
    }, [state?.formData])

    const removeFieldValidation = useCallback((validationName: string) => {
        dispatch({ type: Types.FormContext.ReducerActionTypes.RemoveFieldValidation, payload: { validationName } })
    }, [])

    const removeFormValidation = useCallback((validationName: string) => {
        dispatch({ type: Types.FormContext.ReducerActionTypes.RemoveFormValidation, payload: { validationName } })
    }, [])

    const setFieldValue = useCallback((fieldName: string, fieldValue: Types.FormDataValue) => {
        if (!value) {
            // uncontrolled way
            dispatch({
                type: Types.FormContext.ReducerActionTypes.SetFormDataFieldValue,
                payload: { fieldName, value: fieldValue }
            })
        }

        // onChange is triggered in both ways
        if (onChange) {
            onChange(fieldName, fieldValue)
        }
    }, [onChange, value])

    const terminateField = useCallback((fieldName: string) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.TerminateFormDataField,
            payload: { fieldName }
        })
    }, [])

    const validateField = useCallback((fieldName: string, formData: Types.FormData) => {
        const fieldValidationMessages = state.validations.field.reduce<Types.Validation.Message[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...(
                validation.fieldName === fieldName
                    ? validation.validationFunction(formData[fieldName]?.value, fieldName)
                    : []
            )
        ], [])

        const formValidationMessages = state.validations.form.reduce<Types.Validation.Message[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...(
                validation.involvedFieldNames.includes(fieldName)
                    ? validation.validationFunction(formData)
                    : []
            )
        ], [])

        const validationMessages = [
            ...fieldValidationMessages,
            ...formValidationMessages
        ]

        validationMessages.forEach((validationMessage) => {
            addValidationMessages(
                validationMessage.fieldName,
                [validationMessage]
            )
        })

        return validationMessages
    }, [addValidationMessages, state.validations])

    const validateForm = useCallback((formData: FormData) => {
        const fieldValidationMessages = state.validations.field.reduce<Types.Validation.Message[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...validation.validationFunction(formData?.[validation?.fieldName]?.value, validation?.fieldName)
        ], [])

        const formValidationMessages = state.validations.form.reduce<Types.Validation.Message[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...validation.validationFunction(formData)
        ], [])

        const validationMessages = [
            ...fieldValidationMessages,
            ...formValidationMessages
        ]

        validationMessages.forEach((validationMessage) => {
            addValidationMessages(
                validationMessage.fieldName,
                [validationMessage]
            )
        })

        return validationMessages
    }, [addValidationMessages, state.validations.field, state.validations.form])

    return {
        ...state,
        addFieldValidation,
        addFormValidation,
        addValidationMessages,
        clearAllValidationMessages,
        clearValidationMessages,
        initializeField,
        getButtonLabel,
        getFieldLabel,
        getFieldValidationMessages,
        getFieldValue,
        getFormData,
        removeFieldValidation,
        removeFormValidation,
        setFieldValue,
        terminateField,
        validateField,
        validateForm
    }
}

export default useFormContext
