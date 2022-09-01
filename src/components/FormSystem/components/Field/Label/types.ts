import React, { HTMLAttributes, PropsWithChildren, RefAttributes } from "react"

export type LabelProps = PropsWithChildren<HTMLAttributes<HTMLLabelElement>>

export type LabelRef = HTMLLabelElement

export type LabelComponent = React.FC<LabelProps & RefAttributes<LabelRef>>

export type ComponentType = LabelComponent
