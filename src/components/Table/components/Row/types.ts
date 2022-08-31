import {
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
    RefAttributes
} from "react"
import * as TableTypes from "../types"

enum TableRowEnum {
    Default = "Default",
    TBodyCollapsible = "TBodyCollapsible",
    THeadCollapsible = "THeadCollapsible",
}

interface TableRowCommonProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    hover?: boolean
    variant?: TableTypes.TableVariant
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

type TableRowStyledProps = TableTypes.TableVariantStyledProps

type TableRowCollapsibleStyledProps = TableRowStyledProps &
    TableTypes.TableVariantStyledProps & {
        $active: boolean | undefined
    }

export { TableRowEnum }
export type { TableRow, TableRowStyledProps, TableRowCollapsibleStyledProps }
