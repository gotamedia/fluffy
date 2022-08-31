import * as Contexts from "@components/FormSystem/contexts"
import React, { useCallback, useContext, useMemo } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import type { FormData, FormDataValue } from "../types"

const useBuildFieldContext = (): Types.FieldContext.Value => {
    const {
        addAdditionalInputProp: addAdditionalInputPropForm,
        addFieldValidation,
        formData,
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

    const addAdditionalInputProp = useCallback(<T extends keyof Types.AdditionalInputProps>(
        key: T,
        value: Types.AdditionalInputProps[T]
    ) => {
        if (state.fieldName) {
            addAdditionalInputPropForm(state.fieldName, key, value)
        }
    }, [addAdditionalInputPropForm, state.fieldName])

    const addValidation = useCallback((
        validationId: string,
        validationFunction: Types.Validation.Field.Function,
        validateOnChange?: boolean
    ) => {
        if (state?.fieldName) {
            addFieldValidation(
                `${state?.fieldName}_${validationId}`,
                String(state?.fieldName),
                validationFunction,
                validateOnChange
            )
        }
    }, [addFieldValidation, state?.fieldName])

    const initialize = useCallback((fieldName: string, defaultValue: FormDataValue) => {
        if (fieldName) {
            initializeField(fieldName, defaultValue)
        }
    }, [initializeField])

    const removeValidation = useCallback((validationId: string) => {
        if (state?.fieldName) {
            removeFieldValidation(String(state.fieldName), `${state?.fieldName}_${validationId}`)
        }
    }, [removeFieldValidation, state.fieldName])

    const setIsRequired = useCallback((isRequired: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetIsRequired, payload: isRequired })
    }, [])

    const setFieldName = useCallback((fieldName: string) => {
        dispatch({
            type: Types.FieldContext.ReducerActionTypes.SetFieldName,
            payload: {
                fieldName,
                label: getFieldLabel(fieldName)
            }
        })
    }, [getFieldLabel])

    const setShowDefaultLabel = useCallback((showDefaultLabel: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetShowDefaultLabel, payload: showDefaultLabel })
    }, [])

    const setValidateOnChange = useCallback((validateOnChange: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetValidateOnChange, payload: validateOnChange })
    }, [])

    const terminate = useCallback((fieldName: string) => {
        terminateField(fieldName)
    }, [terminateField])

    const validate = useCallback((formData?: FormData, validateOnChangeOnly?: boolean) => {
        validateField(String(state?.fieldName), formData || getFormData(), validateOnChangeOnly)
    }, [getFormData, state?.fieldName, validateField])

    return useMemo(() => ({
        addAdditionalInputProp,
        additionalInputProps: !state.fieldName ? {} : (formData[state.fieldName]?.additionalInputProps || {}),
        addValidation,
        initialize,
        isRequired: state.isRequired,
        label: state.label ? state.label : "",
        fieldName: state.fieldName,
        removeValidation,
        setIsRequired,
        setFieldName,
        setShowDefaultLabel,
        setValidateOnChange,
        showDefaultLabel: state.showDefaultLabel,
        terminate,
        validate,
        validateOnChange: state.validateOnChange
    }), [
        addAdditionalInputProp,
        addValidation,
        formData,
        initialize,
        removeValidation,
        setFieldName,
        setIsRequired,
        setShowDefaultLabel,
        setValidateOnChange,
        state.fieldName,
        state.isRequired,
        state.label,
        state.showDefaultLabel,
        state.validateOnChange,
        terminate,
        validate
    ])
}

export default useBuildFieldContext
