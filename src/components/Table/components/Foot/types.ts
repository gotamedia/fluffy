import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableFootProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableFoot = ForwardRefExoticComponent<TableFootProps & RefAttributes<HTMLTableSectionElement>>

export type { TableFoot }
