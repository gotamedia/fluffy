import React from "react"
import type * as Types from "../../../../types"

export type CustomProps = {
    involvedFieldNames: string[]
    validateOnChange?: boolean
    validationFunction: Types.Validation.Form.Function
}

export type CustomComponent = React.FC<CustomProps>

export type ComponentType = CustomComponent
