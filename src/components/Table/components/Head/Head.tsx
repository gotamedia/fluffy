import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableHead: Types.TableHeadComponent = forwardRef(({ children, ...rest }, ref) => {
    const { type, state } = useTableContext()
    const elementType: TableElements = "thead"
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
            <Style.Head {...rest} ref={ref}>
                {children}
            </Style.Head>
        </TableContext.Provider>
    )
})

export default TableHead
