import React, { HTMLAttributes, PropsWithChildren } from "react"

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

export type FlexBoxComponent = React.FC<FlexBoxProps>

export type ComponentType = FlexBoxComponent
