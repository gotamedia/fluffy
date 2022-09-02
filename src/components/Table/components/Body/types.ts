import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableBodyProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableBodyComponent = ForwardRefExoticComponent<TableBodyProps & RefAttributes<HTMLTableSectionElement>>

export type { TableBodyComponent, TableBodyProps }
