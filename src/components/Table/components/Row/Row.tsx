import {
    Children,
    forwardRef,
    isValidElement,
    MouseEventHandler,
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

const TableRow: Types.TableRow = forwardRef(({
    children,
    hiddenElement,
    onHover,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest }, ref) => {
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
            !collapsible && type === "tbody" && Types.TableRowEnum.TBody,
            !collapsible && type === "thead" && Types.TableRowEnum.THead,
            collapsible && type === "thead" && Types.TableRowEnum.THeadCollapsible,
            collapsible &&
                type === "tbody" &&
                isValidElement(hiddenElement) &&
                Types.TableRowEnum.TBodyCollapsible,
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
            ref: ref,
            onClick: onClick,
            onMouseEnter: handleOnMouseEnter,
            onMouseLeave: handleOnMouseLeave,
        }

        switch (findRowType) {
            case Types.TableRowEnum.TBody: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.Row {...rest} {...defaultProps}>
                            {children}
                        </Style.Row>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.THead: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.THeadRow {...rest} {...defaultProps}>
                            {children}
                        </Style.THeadRow>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.THeadCollapsible: {
                return (
                    <TableContext.Provider value={context}>
                        <Style.THeadRow {...rest} {...defaultProps}>
                            {children}
                            <Style.CollapsibleEmptyCell style={{ width: "5%" }} />
                        </Style.THeadRow>
                    </TableContext.Provider>
                )
            }
            case Types.TableRowEnum.TBodyCollapsible: {
                const childrenCount = Children.count(children) + 1

                return (
                    <TableContext.Provider value={context}>
                        <Style.CollapsibleRow
                            {...rest}
                            {...defaultProps}
                            $active={isOpen}
                            onClick={handleCollapsibleRowOnClick}
                        >
                            {children}
                            <Style.CollapsibleIconCell>
                                <Icon
                                    color={isOpen ? "white" : undefined}
                                    icon={isOpen ? Icons.ArrowUp : Icons.ArrowDown}
                                />
                            </Style.CollapsibleIconCell>
                        </Style.CollapsibleRow>
                        <Style.CollapsibleRowWrapper>
                            <Style.CollapsibleCell colSpan={childrenCount}>
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
