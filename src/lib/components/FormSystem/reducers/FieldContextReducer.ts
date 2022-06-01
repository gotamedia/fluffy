import * as Types from "../types"

const FieldContextReducer: Types.FieldContext.Reducer = (state, action) => {
    switch (action?.type) {
        case Types.FieldContext.ReducerActionTypes.SetIsRequired:
            return {
                ...state,
                isRequired: action?.payload
            }
        case Types.FieldContext.ReducerActionTypes.SetFieldName:
            return {
                ...state,
                fieldName: action?.payload
            }
        case Types.FieldContext.ReducerActionTypes.SetLabel:
            return {
                ...state,
                label: action?.payload
            }
        default:
            return { ...state }
    }
}

export default FieldContextReducer
