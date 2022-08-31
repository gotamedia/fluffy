import { StyledPrefixThemeProps } from "@root/types/prefix"
import { ReactHTML } from "react"
import * as Constants from "../constants"

type TableElements = keyof Pick<
    ReactHTML,
    "table" | "caption" | "tbody" | "thead" | "tfoot" | "tr" | "th" | "td"
>

type TableVariant = Lowercase<keyof typeof Constants.TableVariant>

interface TableStateProps {
    collapsible: boolean
}

interface TableElementContext<T = {}> {
    state: T & TableStateProps
    type: TableElements | null
    parentType: TableElements | null
    parentState: unknown | null
}

type TableVariantStyledProps = StyledPrefixThemeProps<{
    variant?: TableVariant
}>

export type {
    TableElements,
    TableElementContext,
    TableVariantStyledProps,
    TableVariant,
}
