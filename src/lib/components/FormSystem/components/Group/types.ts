import React, { PropsWithChildren } from "react"

export type StyledGroupProps = {
    $direction?: "horizontal" | "vertical"
}

interface GroupPropsWithoutChildren extends StyledGroupProps { }

export type GroupProps = PropsWithChildren<GroupPropsWithoutChildren>

export type GroupComponent = React.FC<GroupProps>

export type ComponentType = GroupComponent
