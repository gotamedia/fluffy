import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"
import { TableCommonProps } from "../types"

interface TableProps
    extends TableCommonProps,
        DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    collapsible?: boolean
}

type Table = ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>

export type { Table }
