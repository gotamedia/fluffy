import { ReactHTML } from "react"

type TableElements = keyof Pick<
    ReactHTML,
    "table" | "caption" | "tbody" | "thead" | "tfoot" | "tr" | "th" | "td"
>

interface TableStateProps {
    collapsible: boolean
}

interface TableElementContext<T = {}> {
    state: T & TableStateProps
    type: TableElements | null
    parentType: TableElements | null
    parentState: unknown | null
}

export type { TableElements, TableElementContext }
