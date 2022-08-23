import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableFoot: Types.TableFoot = forwardRef(({ children, ...rest }, ref) => {
    const { type, state } = useTableContext()
    const elementType: TableElements = "tfoot"
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
            <Style.Foot {...rest} ref={ref}>
                {children}
            </Style.Foot>
        </TableContext.Provider>
    )
})

export default TableFoot
