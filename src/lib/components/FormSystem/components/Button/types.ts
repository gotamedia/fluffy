import React, { PropsWithChildren } from "react"

export type ButtonProps = PropsWithChildren<{}>

export type ButtonComponent = React.FC<ButtonProps>

export type ComponentType = ButtonComponent & {
    Cancel: ButtonComponent,
    Delete: ButtonComponent,
    Submit: ButtonComponent
}
