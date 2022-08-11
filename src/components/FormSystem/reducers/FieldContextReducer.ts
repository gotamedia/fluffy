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
        case Types.FieldContext.ReducerActionTypes.SetShowDefaultLabel:
            return {
                ...state,
                showDefaultLabel: action?.payload
            }
        default:
            return { ...state }
    }
}

export default FieldContextReducer
