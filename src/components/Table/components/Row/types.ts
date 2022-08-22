import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableRowProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    hover?: boolean
    onHover?: (isHover: boolean) => void
}

type TableRow = ForwardRefExoticComponent<TableRowProps & RefAttributes<HTMLTableRowElement>>

export type { TableRow }
