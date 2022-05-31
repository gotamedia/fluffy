import * as Contexts from "@components/FormSystem/contexts"
import React, { useCallback, useContext, useEffect, useMemo } from "react"
import * as Reducers from "../reducers"
import * as Types from "../types"
import { FormDataValue } from "../types"

const useFieldContext = (): Types.FieldContext.Value => {
    const { getFieldLabel } = useContext(Contexts.FormContext)

    const [state, dispatch] = React.useReducer<Types.FieldContext.Reducer>(
        Reducers.FieldContextReducer,
        { validations: [] }
    )

    useEffect(() => {
        dispatch({
            type: Types.FieldContext.ReducerActionTypes.SetLabel,
            payload: getFieldLabel(state?.name as string)
        })
    }, [getFieldLabel, state?.name])

    const setName = useCallback((name: string) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetName, payload: name })
    }, [])

    const setIsRequired = useCallback((isRequired: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetIsRequired, payload: isRequired })
    }, [])

    const validate = useCallback((value: FormDataValue, name: string) => {
        return state.validations.reduce<Types.Validation.Message[]>((validationResult, validation) => [
            ...validationResult,
            ...validation.validation(value, name)
        ], [])
    }, [state])

    const addValidation = useCallback((name: string, validation: Types.Validation.Function) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.AddValidation, payload: { name, validation } })
    }, [])

    const removeValidation = useCallback((name: string) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.RemoveValidation, payload: { name } })
    }, [])

    return useMemo(() => ({
        name: state.name,
        label: state.label,
        isRequired: state.isRequired,
        setName,
        setIsRequired,
        validate,
        addValidation,
        removeValidation
    }), [addValidation, removeValidation, setIsRequired, setName, state.isRequired, state.label, state.name, validate])
}

export default useFieldContext
