import React from "react"
import * as Types from "../types"

const FormContext = React.createContext<Types.FormContext.Value>({
    addFieldValidation: () => { },
    addFormValidation: () => { },
    addValidationMessages: () => { },
    clearAllValidationMessages: () => { },
    clearValidationMessages: () => { },
    disabled: false,
    formData: {},
    i18n: {},
    initializeField: () => { },
    getButtonLabel: () => "",
    getFieldLabel: () => "",
    getFieldValidationMessages: () => [],
    getHighestValidationMessageType: () => undefined,
    getFieldValue: () => "",
    getFormData: () => ({ }),
    isActing: false,
    isCanceling: false,
    isDeleting: false,
    isSubmitting: false,
    removeFieldValidation: () => { },
    removeFormValidation: () => { },
    setFieldValue: () => { },
    setIsCanceling: () => { },
    setIsDeleting: () => { },
    setIsSubmitting: () => { },
    terminateField: () => { },
    type: Types.FormContext.Types.Create,
    validateField: () => [],
    validateForm: () => [],
    validations: { field: [], form: [] }
})

export default FormContext
