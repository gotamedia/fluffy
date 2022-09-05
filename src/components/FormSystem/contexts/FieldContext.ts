import React from "react"
import type * as Types from "../types"

const FieldContext = React.createContext<Types.FieldContext.Value>({
    addAdditionalInputProp: () => { },
    addValidation: () => { },
    initialize: () => { },
    isRequired: false,
    label: "",
    fieldName: "",
    removeValidation: () => { },
    setIsRequired: () => { },
    setFieldName: () => { },
    setShowDefaultLabel: () => { },
    setValidateOnChange: () => { },
    showDefaultLabel: true,
    terminate: () => { },
    validate: () => []
})

export default FieldContext
