import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableCell: Types.TableCell = forwardRef(({
    children,
    border,
    ...rest
}, ref) => {
    const { type, parentType, state } = useTableContext()

    const elementType: TableElements = parentType === "thead" ? "th" : "td"
    const context = useMemo(
        () => ({
            type: elementType,
            state: state,
            parentType: type,
            parentState: state,
        }),
        [elementType, type, state]
    )

    return (
        <TableContext.Provider value={context}>
            <Style.Cell
                {...rest}
                ref={ref}
                as={elementType}
                $border={border}
                $size={state.size}
            >
                {children}
            </Style.Cell>
        </TableContext.Provider>
    )
})

export default TableCell
