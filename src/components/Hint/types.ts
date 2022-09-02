import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"
import { DefaultTheme } from "styled-components"

export enum HintTypes {
    Error = "error",
    Warning = "warning",
    Success = "success",
    Loading = "loading",
    Info = "hint"
}

export interface StyledHintProps {
    $theme: DefaultTheme
    $type: HintTypes
}

export type HintProps = PropsWithChildren<{
    text?: string
    type?: HintTypes
}>

export type HintRef = HTMLDivElement

export type HintComponent = ForwardRefExoticComponent<HintProps & RefAttributes<HintRef>>

export type ComponentType = HintComponent
