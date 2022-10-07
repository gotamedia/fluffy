import { ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from "react"

export type Directions = "horizontal" | "vertical"

export type StyledFlexBoxProps = {
    $direction?: Directions
    $gap?: string
    $inline?: boolean
} & HTMLAttributes<HTMLDivElement>

export type FlexBoxProps = PropsWithChildren<{
    direction?: Directions
    gap?: string
    inline?: boolean
} & HTMLAttributes<HTMLDivElement>>

export type FlexBoxRef = HTMLDivElement

export type FlexBoxComponent = ForwardRefExoticComponent<FlexBoxProps & RefAttributes<FlexBoxRef>>

export type ComponentType = FlexBoxComponent
