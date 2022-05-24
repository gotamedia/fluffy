import * as Types from "../types"

const FormContextReducer: Types.FormContext.Reducer = (state, action) => {
    switch (action?.type) {
        case Types.FormContext.ReducerActionTypes.UpdateFormData:
            return {
                ...state,
                formData: {
                    ...state?.formData,
                    [action?.payload?.fieldName]: action?.payload?.value
                }
            }
        case Types.FormContext.ReducerActionTypes.SetFormData:
            return {
                ...state,
                formData: action?.payload || {}
            }
        default:
            return { ...state }
    }
}

export default FormContextReducer
