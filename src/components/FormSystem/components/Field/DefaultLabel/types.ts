import React, { HTMLAttributes, RefAttributes } from "react"

export type LabelProps = HTMLAttributes<HTMLLabelElement>

export type LabelRef = HTMLLabelElement

export type LabelComponent = React.FC<LabelProps & RefAttributes<LabelRef>>

export type ComponentType = LabelComponent
