import * as Contexts from "@components/FormSystem/contexts"
import React, { useCallback, useContext, useMemo } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import { FormData, FormDataValue } from "../types"

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

    const addValidation = useCallback((
        validationId: string,
        validationFunction: Types.Validation.Field.Function,
        instantUpdate?: boolean
    ) => {
        if (state?.fieldName) {
            addFieldValidation(
                `${state?.fieldName}_${validationId}`,
                String(state?.fieldName),
                validationFunction,
                instantUpdate
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

    const terminate = useCallback((fieldName: string) => {
        terminateField(fieldName)
    }, [terminateField])

    const validate = useCallback((formData?: FormData, instantUpdateOnly?: boolean) => {
        validateField(String(state?.fieldName), formData || getFormData(), instantUpdateOnly)
    }, [getFormData, state?.fieldName, validateField])

    return useMemo(() => ({
        addValidation,
        initialize,
        isRequired: state.isRequired,
        label: state.label ? state.label : "",
        fieldName: state.fieldName,
        removeValidation,
        setIsRequired,
        setFieldName,
        setShowDefaultLabel,
        showDefaultLabel: state.showDefaultLabel,
        terminate,
        validate
    }), [
        addValidation,
        initialize,
        removeValidation,
        setFieldName,
        setIsRequired,
        setShowDefaultLabel,
        state.fieldName,
        state.isRequired,
        state.label,
        state.showDefaultLabel,
        terminate,
        validate
    ])
}

export default useFieldContext
