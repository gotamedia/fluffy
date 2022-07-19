import * as Types from "../types"

const FormContextReducer: Types.FormContext.Reducer = (state, action) => {
    switch (action?.type) {
        case Types.FormContext.ReducerActionTypes.AddFieldValidation:
            return {
                ...state,
                validations: {
                    ...state?.validations,
                    field: [
                        ...(state?.validations?.field || []),
                        {
                            validationId: action?.payload?.validationId,
                            fieldName: action?.payload?.fieldName,
                            validationFunction: action?.payload?.validationFunction
                        }
                    ]
                }
            }
        case Types.FormContext.ReducerActionTypes.AddValidationMessages:
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
        case Types.FormContext.ReducerActionTypes.AddFormValidation:
            return {
                ...state,
                validations: {
                    ...state?.validations,
                    form: [
                        ...(state?.validations?.form || []),
                        {
                            validationId: action?.payload?.validationId,
                            involvedFieldNames: action?.payload?.involvedFieldNames,
                            validationFunction: action?.payload?.validationFunction
                        }
                    ]
                }
            }
        case Types.FormContext.ReducerActionTypes.ClearValidationMessages:
            return {
                ...state,
                formData: {
                    // remove all validationMessages of other fields that have the current field as an involved field
                    ...Object.keys(state?.formData).reduce<Types.FormData>((formData, fieldName) => ({
                        ...formData,
                        [fieldName]: {
                            ...formData[fieldName],
                            validationMessages: (state?.formData[fieldName]?.validationMessages || [])
                                .filter((validationMessage) => {
                                    return (
                                        !(validationMessage?.involvedFieldNames || []).includes(action?.payload?.fieldName) ||
                                        (
                                            action?.payload?.types !== "all" &&
                                            (
                                                !Array.isArray(action?.payload?.types) ||
                                                !action?.payload?.types.includes(validationMessage?.type)
                                            )
                                        )
                                    )
                                })
                        }
                    }), state?.formData),
                    // remove all validationMessages of the given field itself
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        validationMessages: (state?.formData[action?.payload?.fieldName]?.validationMessages || [])
                            .filter((validationMessage) => {
                                return (
                                    action?.payload?.types !== "all" &&
                                    (
                                        !Array.isArray(action?.payload?.types) ||
                                        !action?.payload?.types.includes(validationMessage?.type)
                                    )
                                )
                            })
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.ClearAllValidationMessages:
            return {
                ...state,
                formData: Object.keys(state?.formData).reduce<Types.FormData>((formData, fieldName) => ({
                    ...formData,
                    [fieldName]: {
                        ...state?.formData[fieldName],
                        validationMessages: (state?.formData[fieldName]?.validationMessages || []).filter((validationMessage) => {
                            return (
                                action?.payload?.types !== "all" &&
                                (
                                    !Array.isArray(action?.payload?.types) ||
                                    !action?.payload?.types.includes(validationMessage?.type)
                                )
                            )
                        })
                    }
                }), {})
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
        case Types.FormContext.ReducerActionTypes.RemoveFieldValidation:
            return {
                ...state,
                formData: Object
                    .keys(state?.formData || {})
                    .reduce<Types.FormData>((formData, fieldName) => ({
                        ...formData,
                        [fieldName]: {
                            ...state.formData[fieldName],
                            validationMessages: (state.formData[fieldName]?.validationMessages || [])
                                .filter(
                                    (validationMessage) =>
                                        validationMessage.validationId !== action?.payload?.validationId
                                )
                        }
                    }), {}),
                validations: {
                    ...state?.validations,
                    field: (state?.validations?.field || [])?.filter(
                        (validation) => (
                            validation.fieldName !== action?.payload?.fieldName ||
                            validation.validationId !== action?.payload?.validationId
                        )
                    )
                }
            }
        case Types.FormContext.ReducerActionTypes.RemoveFormValidation:
            return {
                ...state,
                validations: {
                    ...state?.validations,
                    form: (state?.validations?.form || [])?.filter(
                        (validation) => validation.validationId !== action?.payload?.validationId
                    )
                }
            }
        case Types.FormContext.ReducerActionTypes.ResetFieldRequiresValidation:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action?.payload?.fieldName]: {
                        ...state?.formData[action?.payload?.fieldName],
                        requiresValidation: false
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
                        value: action?.payload?.value,
                        requiresValidation: action?.payload?.isManualChange
                    }
                }
            }
        case Types.FormContext.ReducerActionTypes.SetIsCanceling:
            return {
                ...state,
                isCanceling: action?.payload?.isCanceling === true
            }
        case Types.FormContext.ReducerActionTypes.SetIsDeleting:
            return {
                ...state,
                isDeleting: action?.payload?.isDeleting === true
            }
        case Types.FormContext.ReducerActionTypes.SetIsSubmitting:
            return {
                ...state,
                isSubmitting: action?.payload?.isSubmitting === true
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
