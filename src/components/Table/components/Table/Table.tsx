import { forwardRef, useMemo } from "react"
import { TableContext } from "../context"
import type { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const Table: Types.TableComponent = forwardRef(({ children, collapsible, ...rest }, ref) => {
    const type: TableElements = "table"
    const context = useMemo(
        () => ({
            state: {
                collapsible: collapsible || false,
            },
            type,
            parentType: null,
            parentState: null,
        }),
        [collapsible]
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
