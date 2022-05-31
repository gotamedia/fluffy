import React from "react"
import * as Types from "../types"

const FormContext = React.createContext<Types.FormContext.Value>({
    i18n: {},
    initializeField: () => { },
    terminateField: () => { },
    getButtonLabel: () => "",
    getFieldLabel: () => "",
    getFieldValue: () => "",
    getFieldValidationMessages: () => [],
    getFormData: () => ({ }),
    setFieldValue: () => { },
    clearValidationMessages: () => { },
    addValidationMessages: () => { }
})

export default FormContext
