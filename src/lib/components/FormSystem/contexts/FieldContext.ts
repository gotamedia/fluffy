import React from "react"
import * as Types from "../types"

const FieldContext = React.createContext<Types.FieldContext.Value>({
    addValidation: () => { },
    initialize: () => { },
    removeValidation: () => { },
    setIsRequired: () => { },
    setFieldName: () => { },
    terminate: () => { },
    validate: () => []
})

export default FieldContext
