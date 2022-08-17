import { forwardRef, useMemo } from "react"
import { TableContext } from "../context"
import type { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const Table: Types.Table = forwardRef(({ children, ...rest }, ref) => {
    const type: TableElements = "table"
    const context = useMemo(
        () => ({
            state: {},
            type,
            parentType: null,
            parentState: null,
        }),
        []
    )

    return (
        <TableContext.Provider value={context}>
            <Style.Table {...rest} ref={ref}>
                {children}
            </Style.Table>
        </TableContext.Provider>
    )
})

export default Table
