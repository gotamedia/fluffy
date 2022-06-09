import React, { PropsWithChildren } from "react"

export type StyledGroupProps = {
    $direction?: "horizontal" | "vertical"
    inline?: boolean
    width?: string
}

interface GroupPropsWithoutChildren extends StyledGroupProps { }

export type GroupProps = PropsWithChildren<GroupPropsWithoutChildren>

export type GroupComponent = React.FC<GroupProps>

export type ComponentType = GroupComponent
