import React, { useCallback } from "react"
import * as Types from "../types"
import * as Reducers from "../reducers"

const useFieldContext = (): Types.FieldContext.Value => {
    const [state, dispatch] = React.useReducer<Types.FieldContext.Reducer>(
        Reducers.FieldContextReducer,
        { }
    )

    const setName = useCallback((name: string) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetName, payload: name })
    }, [])

    const setIsRequired = useCallback((isRequired: boolean) => {
        dispatch({ type: Types.FieldContext.ReducerActionTypes.SetIsRequired, payload: isRequired })
    }, [])

    return {
        ...state,
        setName,
        setIsRequired
    }
}

export default useFieldContext
