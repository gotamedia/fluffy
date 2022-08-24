import {
    Children,
    isValidElement,
    forwardRef,
    MouseEventHandler,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"

import Icon, { Icons } from "@components/Icon"
import Collapsible from "@components/Collapsible"

import { TableContext, useTableContext } from "../context"
import { TableElements } from "../types"
import * as Style from "./style"
import * as Types from "./types"

const TableRow: Types.TableRow = forwardRef(({
    children,
    hiddenElement,
    onHover,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
}, ref) => {
        const [isHover, setIsHover] = useState<boolean>()
        const [isOpen, setIsOpen] = useState<boolean>()
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
            !collapsible && Types.TableRowEnum.Default,
            collapsible && type === "thead" && Types.TableRowEnum.THeadCollapsible,
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

        switch (findRowType) {
            case Types.TableRowEnum.Default: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.Row
                            ref={ref}
                            onClick={onClick}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                            {...rest}
                        >
                            {children}
                        </Style.Row>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.THeadCollapsible: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.HeadRow
                            ref={ref}
                            onClick={onClick}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                            {...rest}
                        >
                            {children}
                            <Style.CollapsibleEmptyCell style={{ width: "5%" }} />
                        </Style.HeadRow>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.TBodyCollapsible: {
                const childrenCount = Children.count(children) + 1

                return (
                    <TableContext.Provider value={context}>
                        <Style.CollapsibleRow
                            ref={ref}
                            $active={isOpen}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                            onClick={handleCollapsibleRowOnClick}
                            {...rest}
                        >
                            {children}
                            <Style.CollapsibleIconCell>
                                <Icon
                                    size={"small"}
                                    color={isOpen ? "white" : undefined}
                                    icon={isOpen ? Icons.ArrowUp : Icons.ArrowDown}
                                />
                            </Style.CollapsibleIconCell>
                        </Style.CollapsibleRow>
                        <Style.Row>
                            <Style.CollapsibleCell colSpan={childrenCount}>
                                <Collapsible isOpen={isOpen}>{hiddenElement}</Collapsible>
                            </Style.CollapsibleCell>
                        </Style.Row>
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
