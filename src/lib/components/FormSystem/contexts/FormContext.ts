import React from "react"
import * as Types from "../types"

const FormContext = React.createContext<Types.FormContext.Value>({
    addFieldValidation: () => { },
    addFormValidation: () => { },
    addValidationMessages: () => { },
    clearAllValidationMessages: () => { },
    clearValidationMessages: () => { },
    formData: {},
    i18n: {},
    initializeField: () => { },
    getButtonLabel: () => "",
    getFieldLabel: () => "",
    getFieldValidationMessages: () => [],
    getHighestValidationMessageType: () => undefined,
    getFieldValue: () => "",
    getFormData: () => ({ }),
    removeFieldValidation: () => { },
    removeFormValidation: () => { },
    setFieldValue: () => { },
    terminateField: () => { },
    validateField: () => [],
    validateForm: () => [],
    validations: { field: [], form: [] }
})

export default FormContext
