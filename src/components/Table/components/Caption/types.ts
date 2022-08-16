import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface TableCaptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

type TableCaption = ForwardRefExoticComponent<TableCaptionProps & RefAttributes<HTMLElement>>

export type { TableCaption }
