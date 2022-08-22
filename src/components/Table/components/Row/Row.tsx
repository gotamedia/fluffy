import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableRow: Types.TableRow = forwardRef(({ children, onHover, hover, ...rest }, ref) => {
    const [isHover, setIsHover] = useState<boolean>()
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

    useEffect(() => {
        if (onHover && isHover !== undefined) {
            onHover(isHover)
        }
    }, [onHover, isHover])

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return (
        <TableContext.Provider value={context}>
            <Style.Row
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                hover={hover}
                ref={ref}
                {...rest}
            >
                {children}
            </Style.Row>
        </TableContext.Provider>
    )
})
export default TableRow
