import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

import { TableCommonProps } from "../types"

interface TableCellProps
    extends TableCommonProps,
        DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    scope?: string
    rowSpan?: number
    colSpan?: number
    headers?: string
}

type TableCell = ForwardRefExoticComponent<TableCellProps & RefAttributes<HTMLTableCellElement>>

export type { TableCell, TableCellProps }
