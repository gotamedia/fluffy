import type { AdditionalInputProps } from "@components/FormSystem/types"
import * as FSTypes from "@components/FormSystem/types"
import { HintTypes } from "@components/Hint/types"
import usePrevious from "@hooks/usePrevious"
import React, { useCallback, useEffect } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"

const getFormDataState = (initialValue: FSTypes.FormData | undefined) => {
    if (
        initialValue === undefined ||
        (
            typeof initialValue === "object" &&
            Object
                .values(initialValue)
                .filter(Boolean)
                .filter((field) => field.value && field.value !== "")
                .length === 0
        )
    ) {
        return FSTypes.FormContext.Types.Create
    }

    return FSTypes.FormContext.Types.Update
}

const useBuildFormContext = (props: Types.FormContext.HookProps): Types.FormContext.Value => {
    const { defaultValue, disabled, i18n, initialValue, onCancel, onChange, onDelete } = props

    const [state, dispatch] = React.useReducer<Types.FormContext.Reducer>(
        Reducers.FormContextReducer,
        {
            formData: (initialValue || defaultValue || {}),
            i18n,
            isCanceling: false,
            isDeleting: false,
            isSubmitting: false,
            onCancel,
            onDelete,
            type: getFormDataState(initialValue),
            validations: { field: [], form: [] }
        }
    )
    const previousState = usePrevious(state.validations)

    const generateFieldValidationMessages = useCallback((
        fieldName: string,
        formData: Types.FormData,
        validateOnChangeOnly?: boolean
    ) => {
        const fieldValidationMessages = state.validations.field.reduce<Types.Validation.MessageWithId[]>((
            validationResult,
            validation
        ) => [
            ...validationResult,
            ...(
                validation.fieldName === fieldName && (!validateOnChangeOnly || validation.validateOnChange)
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
                validation.involvedFieldNames.includes(fieldName) && (!validateOnChangeOnly || validation.validateOnChange)
                    ? validation
                        .validationFunction(formData)
                        .map((validationMessage) => ({ ...validationMessage, validationId: validation.validationId }))
                    : []
            )
        ], [])

        return [
            ...fieldValidationMessages,
            ...formValidationMessages
        ]
    }, [state.validations.field, state.validations.form])

    const addAdditionalInputProp = useCallback(<T extends keyof AdditionalInputProps>(
        fieldName: string,
        key: T,
        value: AdditionalInputProps[T]
    ) => {
        dispatch({ type: Types.FormContext.ReducerActionTypes.AddAdditionalInputProp, payload: { fieldName, key, value }})
    }, [])

    const addFieldValidation = useCallback((
        validationId: string,
        fieldName: string,
        validationFunction: Types.Validation.Field.Function,
        validateOnChange?: boolean
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFieldValidation,
            payload: {
                validationId,
                fieldName,
                validationFunction,
                validateOnChange
            }
        })
    }, [])

    const addFormValidation = useCallback((
        validationId: string,
        involvedFieldNames: string[],
        validationFunction: Types.Validation.Form.Function,
        validateOnChange?: boolean
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFormValidation,
            payload: {
                validationId,
                involvedFieldNames,
                validationFunction,
                validateOnChange
            }
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
        types: Types.ValidationTypes[] | "all" = [
            Types.ValidationTypes.Error,
            Types.ValidationTypes.Warning,
            Types.ValidationTypes.Success,
            Types.ValidationTypes.Loading
        ]
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearValidationMessages,
            payload: { fieldName, types }
        })
    }, [])

    const clearAllValidationMessages = useCallback((
        types: Types.ValidationTypes[] | "all" = [
            Types.ValidationTypes.Error,
            Types.ValidationTypes.Warning,
            Types.ValidationTypes.Success,
            Types.ValidationTypes.Loading
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
        const validationStateOrder: Types.ValidationTypes[] = Object.values(HintTypes)

        return (state?.formData?.[fieldName]?.validationMessages || [])
            .reduce<Types.ValidationTypes | undefined>((highest, current: Types.Validation.Message) => {
                if (!highest) {
                    return current?.type
                }

                return highest &&
                    validationStateOrder.indexOf(highest as Types.ValidationTypes) <= validationStateOrder.indexOf(current?.type)
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

    const setFieldValue = useCallback((
        fieldName: string,
        fieldValue: Types.FormDataValue,
        requiresValidation: boolean = false,
        isManualChange: boolean = false
    ) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.SetFormDataFieldValue,
            payload: { fieldName, value: fieldValue, requiresValidation, isManualChange }
        })

        if (onChange) {
            const formData = {
                ...state.formData,
                [fieldName]: {
                    ...state.formData[fieldName],
                    value: fieldValue,
                    requiresValidation
                }
            }
            const validationMessages = generateFieldValidationMessages(fieldName, formData)

            onChange(
                fieldName,
                fieldValue,
                validationMessages.reduce(
                    (valid, message) => valid && message.type !== Types.ValidationTypes.Error,
                    true
                ),
                isManualChange,
                formData,
                (fieldName: string, fieldValue: Types.FormDataValue, requiresValidation: boolean = true) => {
                    setFieldValue(fieldName, fieldValue, requiresValidation, true)
                }
            )
        }
    }, [generateFieldValidationMessages, onChange, state.formData])

    const setIsCanceling = useCallback((isCanceling: boolean) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.SetIsCanceling,
            payload: { isCanceling }
        })
    }, [])

    const setIsDeleting = useCallback((isDeleting: boolean) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.SetIsDeleting,
            payload: { isDeleting }
        })
    }, [])

    const setIsSubmitting = useCallback((isSubmitting: boolean) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.SetIsSubmitting,
            payload: { isSubmitting }
        })
    }, [])

    const terminateField = useCallback((fieldName: string) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.TerminateFormDataField,
            payload: { fieldName }
        })
    }, [])

    const validateField = useCallback((fieldName: string, formData: Types.FormData, validateOnChangeOnly?: boolean) => {
        dispatch({ type: Types.FormContext.ReducerActionTypes.ResetFieldRequiresValidation, payload: { fieldName } })

        const validationMessages = generateFieldValidationMessages(fieldName, formData, validateOnChangeOnly)

        validationMessages.forEach((validationMessage) => {
            addValidationMessages(
                validationMessage.fieldName,
                [validationMessage]
            )
        })

        return validationMessages
    }, [addValidationMessages, generateFieldValidationMessages])

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
            ].filter((validationMessage) => (
                state?.type === FSTypes.FormContext.Types.Update ||
                [FSTypes.ValidationTypes.Info, FSTypes.ValidationTypes.Loading].includes(validationMessage.type)
            ))

            validationMessages.forEach((validationMessage) => {
                addValidationMessages(
                    validationMessage.fieldName,
                    [validationMessage]
                )
            })
        }
    }, [addValidationMessages, previousState, state?.formData, state?.type, state.validations])

    useEffect(() => {
        // validate fields that were not changed by the form system but by a manual setFieldValue call from the outside
        Object.values(state.formData).forEach((field) => {
            if (field.requiresValidation) {
                clearValidationMessages(field.name, "all")
                validateField(field.name, state.formData)
            }
        })
    }, [clearValidationMessages, state.formData, validateField])

    return {
        ...state,
        addAdditionalInputProp,
        addFieldValidation,
        addFormValidation,
        addValidationMessages,
        clearAllValidationMessages,
        clearValidationMessages,
        disabled: Boolean(disabled),
        initializeField,
        isActing: state.isCanceling || state.isDeleting || state.isSubmitting,
        getButtonLabel,
        getFieldLabel,
        getFieldValidationMessages,
        getHighestValidationMessageType,
        getFieldValue,
        getFormData,
        removeFieldValidation,
        removeFormValidation,
        setFieldValue,
        setIsCanceling,
        setIsDeleting,
        setIsSubmitting,
        terminateField,
        validateField,
        validateForm
    }
}

export default useBuildFormContext
