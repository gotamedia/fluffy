import * as Types from "../types"

const FormContextReducer: Types.FormContext.Reducer = (state, action) => {
    switch (action?.type) {
        case Types.FormContext.ReducerActionTypes.AddFormDataFieldValidationMessages:
            return {
                ...state,
                formData: {
                    ...state?.formData,
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        validationMessages: [
                            ...(state?.formData[action?.payload?.fieldName]?.validationMessages || []),
                            ...(action?.payload?.validationMessages || [])
                        ]
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.ClearFormDataFieldValidationMessages:
            return {
                ...state,
                formData: {
                    ...state?.formData,
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        validationMessages: []
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.InitializeFormDataField:
            return {
                ...state,
                formData: {
                    ...state?.formData,
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        name: state?.formData[action?.payload?.fieldName]?.name || action?.payload?.fieldName,
                        validationMessages: state?.formData[action?.payload?.fieldName]?.validationMessages || [],
                        value: state?.formData[action?.payload?.fieldName]?.value || action?.payload?.defaultValue
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.SetFormData:
            return {
                ...state,
                formData: action?.payload || {}
            }
        case Types.FormContext.ReducerActionTypes.SetFormDataFieldValue:
            return {
                ...state,
                formData: {
                    ...state?.formData,
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        value: action?.payload?.value
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.TerminateFormDataField:
            return {
                ...state,
                formData: Object.keys(state?.formData || {}).reduce<Types.FormData>((formData, fieldName) => ({
                    ...formData,
                    ...(
                        fieldName === action?.payload?.fieldName
                            ? {}
                            : { [fieldName]: state?.formData[fieldName] }
                    )
                }), {})
            }
        default:
            return { ...state }
    }
}

export default FormContextReducer
