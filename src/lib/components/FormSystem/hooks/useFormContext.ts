import * as FSTypes from "@components/FormSystem/types"
import React, { useCallback, useEffect } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import usePrevious from "@hooks/usePrevious"

const useFormContext = (props: Types.FormContext.HookProps): Types.FormContext.Value => {
    const { defaultValue, i18n, onChange, value } = props

    const [state, dispatch] = React.useReducer<Types.FormContext.Reducer>(
        Reducers.FormContextReducer,
        { i18n, formData: (value || defaultValue || {}), validations: { field: [], form: [] } }
    )
    const previousState = usePrevious(state.validations)

    useEffect(() => {
        // check to not overwrite the defaultValue if value is not given
        if (typeof value === "object") {
            // controlled way
            dispatch({ type: Types.FormContext.ReducerActionTypes.SetFormData, payload: value })
        }
    }, [value])

    const addFieldValidation = useCallback((
        validationId: string,
        fieldName: string,
        validationFunction: Types.Validation.Field.Function
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFieldValidation,
            payload: { validationId, fieldName, validationFunction }
        })
    }, [])

    const addFormValidation = useCallback((
        validationId: string,
        involvedFieldNames: string[],
        validationFunction: Types.Validation.Form.Function
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFormValidation,
            payload: { validationId, involvedFieldNames, validationFunction }
        })
    }, [])

    const addValidationMessages = useCallback((
        fieldName: string,
        validationMessages: Types.Validation.MessageWithId[]
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddValidationMessages,
            payload: { fieldName, validationMessages }
        })
    }, [])

    const clearValidationMessages = useCallback((
        fieldName: string,
        types: Types.Validation.Types[] | "all" = [
            Types.Validation.Types.Error,
            Types.Validation.Types.Warning,
            Types.Validation.Types.Success
        ]
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearValidationMessages,
            payload: { fieldName, types }
        })
    }, [])

    const clearAllValidationMessages = useCallback((
        types: Types.Validation.Types[] | "all" = [
            Types.Validation.Types.Error,
            Types.Validation.Types.Warning,
            Types.Validation.Types.Success
        ]
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

    const getHighestValidationMessageType = useCallback((fieldName: string) => {
        const validationStateOrder: Types.Validation.Types[] = Object.values(FSTypes.Validation.Types)

        return (state?.formData?.[fieldName]?.validationMessages || [])
            .reduce<Types.Validation.Types | undefined>((highest, current: Types.Validation.Message) => {
                if (!highest) {
                    return current?.type
                }

                return highest &&
                    validationStateOrder.indexOf(highest as Types.Validation.Types) <= validationStateOrder.indexOf(current?.type)
                        ? highest
                        : current?.type
            }, undefined)
    }, [state?.formData])

    const getFieldValue = useCallback((fieldName: string) => {
        return state?.formData?.[fieldName]?.value
    }, [state?.formData])

    const getFormData = useCallback(() => {
        return state?.formData
    }, [state?.formData])

    const removeFieldValidation = useCallback((fieldName: string, validationId: string) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.RemoveFieldValidation,
            payload: { fieldName, validationId }
        })
    }, [])

    const removeFormValidation = useCallback((validationId: string) => {
        dispatch({ type: Types.FormContext.ReducerActionTypes.RemoveFormValidation, payload: { validationId } })
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
        const fieldValidationMessages = state.validations.field.reduce<Types.Validation.MessageWithId[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...(
                validation.fieldName === fieldName
                    ? validation
                        .validationFunction(formData[fieldName]?.value, fieldName)
                        .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
                    : []
            )
        ], [])

        const formValidationMessages = state.validations.form.reduce<Types.Validation.MessageWithId[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...(
                validation.involvedFieldNames.includes(fieldName)
                    ? validation
                        .validationFunction(formData)
                        .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
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

    const validateForm = useCallback((formData: Types.FormData) => {
        const fieldValidationMessages = state.validations.field.reduce<Types.Validation.MessageWithId[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...validation
                .validationFunction(formData?.[validation?.fieldName]?.value, validation?.fieldName)
                .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
        ], [])

        const formValidationMessages = state.validations.form.reduce<Types.Validation.MessageWithId[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...validation
                .validationFunction(formData)
                .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
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

    useEffect(() => {
        const existingFieldValidationIds = previousState.field.map((message) => message.validationId)
        const existingFormValidationIds = previousState.form.map((message) => message.validationId)

        const newFieldValidations = state.validations.field
            .filter((message) => !existingFieldValidationIds.includes(message.validationId))
        const newFormValidations = state.validations.form
            .filter((message) => !existingFormValidationIds.includes(message.validationId))

        if (newFieldValidations.length > 0 || newFormValidations.length > 0) {
            const fieldValidationMessages = newFieldValidations
                .reduce<Types.Validation.MessageWithId[]>(
                    (validationResult, validation) => [
                        ...validationResult,
                        ...validation
                            .validationFunction(state?.formData[validation.fieldName]?.value, validation.fieldName)
                            .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
                    ],
                    []
                )

            const formValidationMessages = state.validations.form.reduce<Types.Validation.MessageWithId[]>((
                validationResult,
                validation
            ) => [
                ...validationResult,
                ...(
                    validation
                        .validationFunction(state?.formData)
                        .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
                )
            ], [])

            const validationMessages = [
                ...fieldValidationMessages,
                ...formValidationMessages
            ].filter((validationMessage) => [FSTypes.Validation.Types.Hint].includes(validationMessage.type))

            validationMessages.forEach((validationMessage) => {
                addValidationMessages(
                    validationMessage.fieldName,
                    [validationMessage]
                )
            })
        }
    }, [addValidationMessages, previousState, state?.formData, state.validations])

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
        getHighestValidationMessageType,
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
