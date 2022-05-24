import React, { PropsWithChildren } from "react"

export type FieldProps = PropsWithChildren<{

}>

export type FieldComponent = React.FC<FieldProps>

export type ComponentType = FieldComponent
