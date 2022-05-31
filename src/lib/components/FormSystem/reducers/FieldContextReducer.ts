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
        case Types.FieldContext.ReducerActionTypes.SetLabel:
            return {
                ...state,
                label: action?.payload
            }
        case Types.FieldContext.ReducerActionTypes.AddValidation:
            return {
                ...state,
                validations: [
                    ...state.validations,
                    { name: action?.payload?.name, validation: action?.payload?.validation }
                ]
            }
        case Types.FieldContext.ReducerActionTypes.RemoveValidation:
            return {
                ...state,
                validations: state.validations.filter((validation) => validation.name !== action?.payload?.name )
            }
        default:
            return { ...state }
    }
}

export default FieldContextReducer
