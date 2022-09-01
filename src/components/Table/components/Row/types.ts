import { StyledPrefixThemeProps } from "@root/types/prefix"
import {
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
    RefAttributes,
} from "react"
import * as Constants from "../../constants"

enum TableRowEnum {
    THead = "THead",
    TBody = "TBody",
    TBodyCollapsible = "TBodyCollapsible",
    THeadCollapsible = "THeadCollapsible",
}

interface TableRowCommonProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
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

type TableRowComponent = ForwardRefExoticComponent<
    TableRowProps & RefAttributes<HTMLTableRowElement>
>

interface TableRowStyledProps
    extends StyledPrefixThemeProps<{
        variant?: Lowercase<keyof typeof Constants.TableVariant>
    }> {}

interface TableRowCollapsibleStyledProps extends TableRowStyledProps {
    $active: boolean | undefined
}

export { TableRowEnum }
export type {
    TableRowComponent,
    TableRowProps,
    TableRowStyledProps,
    TableRowCollapsibleStyledProps,
}
