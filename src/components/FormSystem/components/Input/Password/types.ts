import { InputProps, InputRef } from "@components/Input"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type PasswordProps = PropsWithChildren<{
    disabled?: boolean
    name: string
    readOnly?: boolean
    visibilityToggleable?: boolean
} & InputProps>

export type PasswordComponent = ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>

export type ComponentType = PasswordComponent
