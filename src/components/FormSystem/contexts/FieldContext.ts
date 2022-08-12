import React from "react"
import * as Types from "../types"

const FieldContext = React.createContext<Types.FieldContext.Value>({
    addAdditionalInputProp: () => { },
    additionalInputProps: { },
    addValidation: () => { },
    initialize: () => { },
    isRequired: false,
    label: "",
    fieldName: "",
    removeValidation: () => { },
    setIsRequired: () => { },
    setFieldName: () => { },
    setShowDefaultLabel: () => { },
    showDefaultLabel: true,
    terminate: () => { },
    validate: () => []
})

export default FieldContext
