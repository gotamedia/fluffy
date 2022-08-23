import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableBodyProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableBody = ForwardRefExoticComponent<TableBodyProps & RefAttributes<HTMLTableSectionElement>>

export type { TableBody }
