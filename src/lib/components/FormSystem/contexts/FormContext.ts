import React from "react"
import * as Types from "../types"

const FormContext = React.createContext<Types.FormContext.Value>({
    addFieldValidation: () => { },
    addFormValidation: () => { },
    addValidationMessages: () => { },
    clearAllValidationMessages: () => { },
    clearValidationMessages: () => { },
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
    validateForm: () => []
})

export default FormContext
