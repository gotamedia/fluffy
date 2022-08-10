import { ListItemProps } from "@components/ListItem/types"
import { SelectProps as PlainSelectProps } from "@components/Select/types"
import React, { PropsWithChildren } from "react"

export interface SelectOption extends ListItemProps {
}

export type SelectProps = PropsWithChildren<{
    disabled?: boolean
    name: string
    options: SelectOption[]
} & Omit<PlainSelectProps, "label" | "selected">>

export type SelectComponent = React.FC<SelectProps>

export type ComponentType = SelectComponent
