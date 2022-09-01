import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableCaptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

type TableCaptionComponent = ForwardRefExoticComponent<TableCaptionProps & RefAttributes<HTMLElement>>

export type { TableCaptionComponent, TableCaptionProps }
