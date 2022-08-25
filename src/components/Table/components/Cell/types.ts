import {
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from "react"

import {
    TableBorderStyledProps,
    TableCommonProps,
    TableSizes
} from "../types"

interface TableCellProps
    extends TableCommonProps,
        DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    scope?: string
    rowSpan?: number
    colSpan?: number
    headers?: string
}

type TableCell = ForwardRefExoticComponent<TableCellProps & RefAttributes<HTMLTableCellElement>>
type TableCellStyledProps = TableBorderStyledProps & TableCellProps & { $size?: TableSizes }

export type { TableCell, TableCellProps, TableCellStyledProps }
