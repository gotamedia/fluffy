import { StyledPrefixThemeProps } from "@root/types/prefix"
import { ReactHTML } from "react"

type TableElements = keyof Pick<
    ReactHTML, "table"
    | "caption"
    | "tbody"
    | "thead"
    | "tfoot"
    | "tr"
    | "th"
    | "td"
>

type BorderType = "bordered"
    | "bottom"
    | "right"
    | "left"
    | "top"
    | "vertical"
    | "horizontal"
    | "none"
    | undefined

type TableSizes = "small" | "medium"

type TableThemes = "primary" | "secondary" | "tertiary" | "quaternary"

interface TableStateProps {
    collapsible: boolean
    size: TableSizes
}

interface TableElementContext<T = {}> {
    state: T & TableStateProps
    type: TableElements | null
    parentType: TableElements | null
    parentState: unknown | null
}

interface TableCommonProps {
    border?: BorderType
}

type TableBorderStyledProps = StyledPrefixThemeProps<TableCommonProps>
type TableThemeStyledProps = StyledPrefixThemeProps<{
    theme?: TableThemes
}>

export type {
    TableElements,
    TableSizes,
    TableElementContext,
    TableBorderStyledProps,
    TableThemeStyledProps,
    TableCommonProps,
    TableThemes
}
