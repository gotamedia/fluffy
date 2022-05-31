import React, { useCallback, useEffect } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"

const useFormContext = (props: Types.FormContext.HookProps): Types.FormContext.Value => {
    const { defaultValue, i18n, onChange, value } = props

    const [state, dispatch] = React.useReducer<Types.FormContext.Reducer>(
        Reducers.FormContextReducer,
        { i18n, formData: (value || defaultValue || {}) }
    )

    const getButtonLabel = useCallback((buttonType: Types.ButtonTypes) => {
        return state?.i18n?.buttons?.[buttonType]
    }, [state?.i18n?.buttons])

    const getFieldLabel = useCallback((fieldName: string) => {
        return state?.i18n?.fields?.[fieldName]
    }, [state?.i18n?.fields])

    const getFieldValue = useCallback((fieldName: string) => {
        return state?.formData?.[fieldName]?.value
    }, [state?.formData])

    const getFieldValidationMessages = useCallback((fieldName: string) => {
        return state?.formData?.[fieldName]?.validationMessages || []
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

    const clearValidationMessages = useCallback((fieldName: string) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.ClearFormDataFieldValidationMessages,
            payload: { fieldName }
        })
    }, [])

    const addValidationMessages = useCallback((fieldName: string, validationMessages: Types.Validation.Message[]) => {
        dispatch({
            type: Types.FormContext.ReducerActionTypes.AddFormDataFieldValidationMessages,
            payload: { fieldName, validationMessages }
        })
    }, [])

    useEffect(() => {
        // check to not overwrite the defaultValue if value is not given
        if (typeof value === "object") {
            // controlled way
            dispatch({ type: Types.FormContext.ReducerActionTypes.SetFormData, payload: value })
        }
    }, [value])

    return {
        ...state,
        getButtonLabel,
        getFieldLabel,
        getFieldValue,
        getFieldValidationMessages,
        getFormData,
        setFieldValue,
        clearValidationMessages,
        addValidationMessages
    }
}

export default useFormContext
