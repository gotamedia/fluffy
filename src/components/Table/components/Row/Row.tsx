import {
    Children,
    forwardRef,
    isValidElement,
    MouseEventHandler,
    useCallback,
    useEffect,
    useMemo,
    useState
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
    variant,
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
                const rowVariant = type === "thead" ? "tertiary" : "primary"
                return (
                    <TableContext.Provider value={context}>
                        <Style.Row
                            ref={ref}
                            $variant={variant || rowVariant}
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
                            $variant={variant || "tertiary"}
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
                const collapsibleVariant =
                    isHover && !isOpen ? "tertiary" : isOpen ? "quaternary" : "primary"

                return (
                    <TableContext.Provider value={context}>
                        <Style.CollapsibleRow
                            ref={ref}
                            $active={isOpen}
                            $variant={variant || collapsibleVariant}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                            onClick={handleCollapsibleRowOnClick}
                            {...rest}
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
