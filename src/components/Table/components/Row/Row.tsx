import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableRow: Types.TableRow = forwardRef(({ children, hover, ...rest }, ref) => {
    const { type, state } = useTableContext()
    const elementType: TableElements = "tr"
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
            <Style.Row {...rest} hover={hover} ref={ref}>
                {children}
            </Style.Row>
        </TableContext.Provider>
    )
})
export default TableRow
