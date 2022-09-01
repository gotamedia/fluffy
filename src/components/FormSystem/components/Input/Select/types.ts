import type { ListItemProps } from "@components/ListItem/types"
import type { SelectProps as PlainSelectProps } from "@components/Select/types"
import { SelectRef } from "@components/Select/types"
import { ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from "react"

export interface SelectOption extends ListItemProps {
}

export type SelectProps = PropsWithChildren<{
    disabled?: boolean
    name: string
    options: SelectOption[]
} & Omit<PlainSelectProps, "label" | "selected">>

export type SelectComponent = ForwardRefExoticComponent<SelectProps & RefAttributes<SelectRef>>

export type ComponentType = SelectComponent
