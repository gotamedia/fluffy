import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableHeadProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableHead = ForwardRefExoticComponent<TableHeadProps & RefAttributes<HTMLTableSectionElement>>

export type { TableHead }
