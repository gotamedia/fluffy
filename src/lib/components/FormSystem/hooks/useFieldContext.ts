import * as Contexts from "@components/FormSystem/contexts"
import React, { useCallback, useContext, useEffect, useMemo } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import { FormDataValue } from "../types"

const useFieldContext = (): Types.FieldContext.Value => {
    const {
        addFieldValidation,
        getFieldLabel,
        getFormData,
        initializeField,
        removeFieldValidation,
        terminateField,
        validateField
    } = useContext(Contexts.FormContext)

    const [state, dispatch] = React.useReducer<Types.FieldContext.Reducer>(
        Reducers.FieldContextReducer,
        { }
    )

    useEffect(() => {
        dispatch({
            type: Types.FieldContext.ReducerActionTypes.SetLabel,
            payload: getFieldLabel(state?.fieldName as string)
        })
    }, [getFieldLabel, state?.fieldName])

    const addValidation = useCallback((validationName: string, validationFunction: Types.Validation.Field.Function) => {
        if (state?.fieldName) {
            addFieldValidation(`${state?.fieldName}_${validationName}`, String(state?.fieldName), validationFunction)
        }
    }, [addFieldValidation, state?.fieldName])

    const initialize = useCallback((fieldName: string, defaultValue: FormDataValue) => {
        if (fieldName) {
            initializeField(fieldName, defaultValue)
        }
    }, [initializeField])

    const removeValidation = useCallback((validationName: string) => {
        if (state?.fieldName) {
            removeFieldValidation(String(state.fieldName), `${state?.fieldName}_${validationName}`)
        }
    }, [removeFieldValidation, state.fieldName])

    const setIsRequired = useCallback((isRequired: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetIsRequired, payload: isRequired })
    }, [])

    const setFieldName = useCallback((fieldName: string) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetFieldName, payload: fieldName })
    }, [])

    const terminate = useCallback((fieldName: string) => {
        terminateField(fieldName)
    }, [terminateField])

    const validate = useCallback(() => {
        validateField(String(state?.fieldName), getFormData())
    }, [getFormData, state?.fieldName, validateField])

    return useMemo(() => ({
        addValidation,
        initialize,
        isRequired: state.isRequired,
        label: state.label,
        fieldName: state.fieldName,
        removeValidation,
        setIsRequired,
        setFieldName,
        terminate,
        validate
    }), [
        addValidation,
        initialize,
        removeValidation,
        setFieldName,
        setIsRequired,
        state.fieldName,
        state.isRequired,
        state.label,
        terminate,
        validate
    ])
}

export default useFieldContext
