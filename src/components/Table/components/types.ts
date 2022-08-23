import { ReactHTML } from "react"

type TableElements = keyof Pick<
    ReactHTML,
    "table" | "caption" | "tbody" | "thead" | "tfoot" | "tr" | "th" | "td"
>

interface TableElementContext<T = {}> {
    state: T
    type: TableElements | null
    parentType: TableElements | null
    parentState: unknown | null
}

export type { TableElements, TableElementContext }
