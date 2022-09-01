import { ButtonProps as PlainButtonProps, ButtonRef } from "@components/Button"
import React, { PropsWithChildren, RefAttributes } from "react"

export type ButtonProps = PropsWithChildren<PlainButtonProps & RefAttributes<ButtonRef>>

export type ButtonComponent = React.FC<ButtonProps>

export type ComponentType = ButtonComponent & {
    Cancel: ButtonComponent,
    Delete: ButtonComponent,
    Submit: ButtonComponent
}
