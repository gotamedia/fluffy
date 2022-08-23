import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {}

type Table = ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>>

export type { Table }
