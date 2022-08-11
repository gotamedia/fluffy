import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableCaption: Types.TableCaption = forwardRef(({ children, ...rest }, ref) => {
    const { type, state } = useTableContext()

    const elementType: TableElements = "caption"
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
            <Style.Caption {...rest} ref={ref}>
                {children}
            </Style.Caption>
        </TableContext.Provider>
    )
})

export default TableCaption
