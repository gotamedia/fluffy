import { forwardRef, useMemo } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Styled from "./style"
import * as Types from "./types"

const TableBody: Types.TableBody = forwardRef(({ children, ...rest }, ref) => {
    const { type, state } = useTableContext()
    const elementType: TableElements = "tbody"
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
            <Styled.Body {...rest} ref={ref}>
                {children}
            </Styled.Body>
        </TableContext.Provider>
    )
})

export default TableBody
