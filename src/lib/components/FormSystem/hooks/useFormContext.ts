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
        return state?.formData?.[fieldName]
    }, [state?.formData])

    const getFormData = useCallback(() => {
        return state?.formData
    }, [state?.formData])

    const updateFormData = useCallback((fieldName: string, fieldValue: Types.FormDataValue) => {
        if (!value) {
            // uncontrolled way
            dispatch({ type: Types.FormContext.ReducerActionTypes.UpdateFormData, payload: { fieldName, value: fieldValue } })
        }

        // onChange is triggered in both ways
        if (onChange) {
            onChange(fieldName, fieldValue)
        }
    }, [onChange, value])

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
        getFormData,
        updateFormData
    }
}

export default useFormContext
