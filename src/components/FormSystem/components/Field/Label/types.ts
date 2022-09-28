import { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"

export type LabelProps = PropsWithChildren<HTMLAttributes<HTMLLabelElement>>

export type LabelRef = HTMLLabelElement

export type LabelComponent = ForwardRefExoticComponent<LabelProps & RefAttributes<LabelRef>>

export type ComponentType = LabelComponent
