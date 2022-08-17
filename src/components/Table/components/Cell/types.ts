import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableCellProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    scope?: string
    rowSpan?: number
    colSpan?: number
    headers?: string
}

type TableCell = ForwardRefExoticComponent<TableCellProps & RefAttributes<HTMLTableCellElement>>

export type { TableCell, TableCellProps }
