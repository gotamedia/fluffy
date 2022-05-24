import React from "react"
import * as Types from "../types"

const FormContext = React.createContext<Types.FormContext.Value>({
    i18n: {},
    getButtonLabel: () => "",
    getFieldLabel: () => "",
    getFieldValue: () => "",
    getFormData: () => ({ }),
    updateFormData: () => { }
})

export default FormContext
