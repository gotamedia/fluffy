import {
    ReactNode,
    MouseEventHandler,
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes
} from "react"

enum TableRowEnum {
    Default = "Default",
    TBodyCollapsible = "TBodyCollapsible",
    THeadCollapsible = "THeadCollapsible",
}

interface TableRowCommonProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    hover?: boolean
    onHover?: (isHover: boolean) => void
}

interface TableRowDefaultProps {
    hiddenElement?: never
}

interface TableRowCollapsibleProps {
    hiddenElement: ReactNode
    onClick?: MouseEventHandler<HTMLTableRowElement>
}

type TableRowConditionalProps = TableRowDefaultProps | TableRowCollapsibleProps

type TableRowProps = TableRowCommonProps & TableRowConditionalProps

type TableRow = ForwardRefExoticComponent<TableRowProps & RefAttributes<HTMLTableRowElement>>

export { TableRowEnum }
export type { TableRow }
