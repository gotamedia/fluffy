import * as Types from "../types"

const FieldContextReducer: Types.FieldContext.Reducer = (state, action) => {
    switch (action?.type) {
        case Types.FieldContext.ReducerActionTypes.SetIsRequired:
            return {
                ...state,
                isRequired: action?.payload
            }
        case Types.FieldContext.ReducerActionTypes.SetName:
            return {
                ...state,
                name: action?.payload
            }
        default:
            return { ...state }
    }
}

export default FieldContextReducer
