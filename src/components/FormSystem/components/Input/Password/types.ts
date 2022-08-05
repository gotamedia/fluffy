import { InputProps } from "@components/Input"
import React, { PropsWithChildren } from "react"

export type PasswordProps = PropsWithChildren<{
    disabled?: boolean
    name: string
    readOnly?: boolean
    visibilityToggleable?: boolean
} & InputProps>

export type PasswordComponent = React.FC<PasswordProps>

export type ComponentType = PasswordComponent
