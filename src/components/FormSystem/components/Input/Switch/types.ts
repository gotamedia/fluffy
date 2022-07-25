import { SwitchButtonProps } from "@components/SwitchButton"
import React, { PropsWithChildren } from "react"

export type SwitchProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & SwitchButtonProps>

export type SwitchComponent = React.FC<SwitchProps>

export type ComponentType = SwitchComponent
