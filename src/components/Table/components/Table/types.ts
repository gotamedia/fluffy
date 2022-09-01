import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    collapsible?: boolean
}

type TableComponent = ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>

export type { TableComponent, TableProps }
