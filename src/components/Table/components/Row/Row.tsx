import {
    forwardRef,
    isValidElement,
    MouseEventHandler,
    MutableRefObject,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"

import Collapsible from "@components/Collapsible"
import Icon, { Icons } from "@components/Icon"

import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableRow: Types.TableRowComponent = forwardRef(({
    children,
    hiddenElement,
    onHover,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest }, ref) => {
        const [isHover, setIsHover] = useState<boolean>()
        const [isOpen, setIsOpen] = useState<boolean>()
        const [totalCells, setTotalCells] = useState<number>(0)
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

        const collapsible = state.collapsible
        const findRowType = [
            !collapsible && type === "thead" && Types.TableRowEnum.THead,
            collapsible && type === "thead" && Types.TableRowEnum.THeadCollapsible,
            (!collapsible || (collapsible && !hiddenElement && type === "tbody")) && Types.TableRowEnum.TBody,
            collapsible && type === "tbody" && isValidElement(hiddenElement) && Types.TableRowEnum.TBodyCollapsible,
        ].find(Boolean)

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

        const handleCollapsibleRowOnClick = useCallback<MouseEventHandler<HTMLTableRowElement>>(
            (event) => {
                setIsOpen(!isOpen)
                if (onClick) {
                    onClick(event)
                }
            },
            [isOpen, onClick]
        )

        const defaultProps = {
            onClick: onClick,
            onMouseEnter: handleOnMouseEnter,
            onMouseLeave: handleOnMouseLeave,
        }

        switch (findRowType) {
            case Types.TableRowEnum.TBody: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.Row {...rest} {...defaultProps} ref={ref}>
                            {children}
                        </Style.Row>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.THead: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.THeadRow {...rest} {...defaultProps} ref={ref}>
                            {children}
                        </Style.THeadRow>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.THeadCollapsible: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.THeadRow {...rest} {...defaultProps} ref={ref}>
                            {children}
                            <Style.CollapsibleEmptyCell />
                        </Style.THeadRow>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.TBodyCollapsible: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.CollapsibleRow
                            {...rest}
                            {...defaultProps}
                            ref={(element) => {
                                if (element) {
                                    setTotalCells(element.cells.length)
                                    if (ref) {
                                        (ref as MutableRefObject<HTMLTableRowElement>).current = element
                                    }
                                }
                            }}
                            $active={isOpen}
                            onClick={handleCollapsibleRowOnClick}
                        >
                            {children}
                            <Style.CollapsibleIconCell>
                                <Icon
                                    size={"tiny"}
                                    color={isOpen ? "white" : undefined}
                                    icon={isOpen ? Icons.ArrowUp : Icons.ArrowDown}
                                />
                            </Style.CollapsibleIconCell>
                        </Style.CollapsibleRow>
                        <Style.CollapsibleRowWrapper>
                            <Style.CollapsibleCell colSpan={totalCells}>
                                <Collapsible open={isOpen}>{hiddenElement}</Collapsible>
                            </Style.CollapsibleCell>
                        </Style.CollapsibleRowWrapper>
                    </TableContext.Provider>
                )
            }
            default: {
                return null
            }
        }
    }
)
export default TableRow
