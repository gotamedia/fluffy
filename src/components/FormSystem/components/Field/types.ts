import React, { PropsWithChildren } from "react"

export type StyledFieldProps = {
    width?: string
}

export type FieldProps = PropsWithChildren<{

} & StyledFieldProps>

export type FieldComponent = React.FC<FieldProps>

export type ComponentType = FieldComponent
