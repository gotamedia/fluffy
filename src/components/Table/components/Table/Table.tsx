import { forwardRef, useMemo } from "react"
import { TableContext } from "../context"
import type { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const Table: Types.Table = forwardRef(({
    children,
    size,
    collapsible,
    border,
    ...rest
}, ref) => {
    const type: TableElements = "table"
    const context = useMemo(
        () => ({
            state: {
                collapsible: collapsible || false,
                size: size || "small",
            },
            type,
            parentType: null,
            parentState: null,
        }),
        [collapsible, size]
    )

    return (
        <TableContext.Provider value={context}>
            <Style.Table {...rest} ref={ref} $border={border}>
                {children}
            </Style.Table>
        </TableContext.Provider>
    )
})

export default Table
