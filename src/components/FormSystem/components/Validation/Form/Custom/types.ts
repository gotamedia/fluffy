import React from "react"
import * as Types from "../../../../types"

export type CustomProps = {
    validationFunction: Types.Validation.Form.Function
    involvedFieldNames: string[]
}

export type CustomComponent = React.FC<CustomProps>

export type ComponentType = CustomComponent
