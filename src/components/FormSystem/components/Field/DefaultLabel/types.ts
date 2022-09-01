import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

export type LabelProps = HTMLAttributes<HTMLLabelElement>

export type LabelRef = HTMLLabelElement

export type LabelComponent = ForwardRefExoticComponent<LabelProps & RefAttributes<LabelRef>>

export type ComponentType = LabelComponent
