import {
    RefAttributes,
    HTMLAttributes,
    DetailedHTMLProps,
    ForwardRefExoticComponent
} from "react"
import { TableSizes } from "../types"

interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    collapsible?: boolean
    size?: TableSizes
}

type Table = ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>

export type { Table }
