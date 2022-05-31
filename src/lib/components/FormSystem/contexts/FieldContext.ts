import React from "react"
import * as Types from "../types"

const FieldContext = React.createContext<Types.FieldContext.Value>({
    setName: () => { },
    setIsRequired: () => { },
    validate: () => [],
    addValidation: () => { },
    removeValidation: () => { }
})

export default FieldContext
