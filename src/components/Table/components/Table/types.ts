import {
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from "react"
import { TableCommonProps, TableSizes } from "../types"

interface TableProps extends TableCommonProps, DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    collapsible?: boolean
    size?: TableSizes
}

type Table = ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>

export type { Table }
