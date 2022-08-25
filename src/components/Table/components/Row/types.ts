import {
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
    RefAttributes,
} from "react"
import * as TableTypes from "../types"

enum TableRowEnum {
    Default = "Default",
    TBodyCollapsible = "TBodyCollapsible",
    THeadCollapsible = "THeadCollapsible",
}

interface TableRowCommonProps extends 
    TableTypes.TableCommonProps,
    DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
    > {
    hover?: boolean
    theme?: TableTypes.TableThemes
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

type TableRowStyledProps = TableTypes.TableBorderStyledProps  & TableTypes.TableThemeStyledProps

type TableRowCollapsibleStyledProps = TableRowStyledProps & TableTypes.TableThemeStyledProps & {
    $active: boolean | undefined
}

export { TableRowEnum }
export type {
    TableRow,
    TableRowStyledProps,
    TableRowCollapsibleStyledProps
}
