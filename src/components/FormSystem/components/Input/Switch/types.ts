import { SwitchButtonProps, SwitchButtonRef } from "@components/SwitchButton"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export type SwitchProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & SwitchButtonProps>

export type SwitchComponent = ForwardRefExoticComponent<SwitchProps & RefAttributes<SwitchButtonRef>>

export type ComponentType = SwitchComponent
