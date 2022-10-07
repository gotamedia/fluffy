import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableHeadProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

type TableHeadComponent = ForwardRefExoticComponent<
    TableHeadProps & RefAttributes<HTMLTableSectionElement>
>

export type { TableHeadComponent, TableHeadProps }
