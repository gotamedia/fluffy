import React from "react"
import * as Types from "../types"

const FieldContext = React.createContext<Types.FieldContext.Value>({
    setName: () => { }, // TODO better initial state?
    setIsRequired: () => { } // TODO better initial state?
})

export default FieldContext
