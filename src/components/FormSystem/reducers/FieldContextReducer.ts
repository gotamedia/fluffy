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
                fieldName: action?.payload?.fieldName,
                label: action?.payload?.label
            }
        default:
            return { ...state }
    }
}

export default FieldContextReducer
