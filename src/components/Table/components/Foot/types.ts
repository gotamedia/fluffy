import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableFootProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableFootComponent = ForwardRefExoticComponent<
    TableFootProps & RefAttributes<HTMLTableSectionElement>
>

export type { TableFootComponent, TableFootProps }
