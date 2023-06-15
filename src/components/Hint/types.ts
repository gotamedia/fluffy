import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export enum HintTypes {
    Error = "error",
    Warning = "warning",
    Success = "success",
    Loading = "loading",
    Info = "info"
}

export interface StyledHintProps {
    $type: HintTypes
}

export type HintProps = PropsWithChildren<{
    text?: string
    type?: HintTypes
}>

export type HintRef = HTMLDivElement

export type HintComponent = ForwardRefExoticComponent<HintProps & RefAttributes<HintRef>>

export type ComponentType = HintComponent
