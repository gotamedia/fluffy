import React, { useCallback, useEffect } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"

const useFormContext = (props: Types.FormContext.HookProps): Types.FormContext.Value => {
    const { defaultValue, i18n, onChange, value } = props

    const [state, dispatch] = React.useReducer<Types.FormContext.Reducer>(
        Reducers.FormContextReducer,
        { i18n, formData: (value || defaultValue || {}) }
    )

    useEffect(() => {
        // check to not overwrite the defaultValue if value is not given
        if (typeof value === "object") {
            // controlled way
            dispatch({ type: Types.FormContext.ReducerActionTypes.SetFormData, payload: value })
        }
    }, [value])

    const addValidationMessages = useCallback((fieldName: string, validationMessages: Types.Validation.Message[]) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFormDataFieldValidationMessages,
            payload: { fieldName, validationMessages }
        })
    }, [])

    const clearValidationMessages = useCallback((fieldName: string) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearFormDataFieldValidationMessages,
            payload: { fieldName }
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

    return {
        ...state,
        addValidationMessages,
        clearValidationMessages,
        initializeField,
        getButtonLabel,
        getFieldLabel,
        getFieldValidationMessages,
        getFieldValue,
        getFormData,
        setFieldValue,
        terminateField
    }
}

export default useFormContext
