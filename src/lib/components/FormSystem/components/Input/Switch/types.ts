import React from "react"

export interface SwitchProps {
    disabled?: boolean
    readOnly?: boolean
    name: string
}

export type SwitchComponent = React.FC<SwitchProps>

export type ComponentType = SwitchComponent
