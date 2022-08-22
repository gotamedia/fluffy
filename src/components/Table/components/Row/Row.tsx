import { forwardRef, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react"
import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableRow: Types.TableRow = forwardRef(
    ({ children, onMouseEnter, onMouseLeave, onHover, hover, ...rest }, ref) => {
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

        const handleOnMouseEnter = useCallback<MouseEventHandler<HTMLTableRowElement>>(
            (event) => {
                setIsHover(true)
                if (onMouseEnter) {
                    onMouseEnter(event)
                }
            },
            [onMouseEnter]
        )

        const handleOnMouseLeave = useCallback<MouseEventHandler<HTMLTableRowElement>>(
            (event) => {
                setIsHover(false)
                if (onMouseLeave) {
                    onMouseLeave(event)
                }
            },
            [onMouseLeave]
        )

        return (
            <TableContext.Provider value={context}>
                <Style.Row
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    hover={hover}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </Style.Row>
            </TableContext.Provider>
        )
    }
)
export default TableRow
