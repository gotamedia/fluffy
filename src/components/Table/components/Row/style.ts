import styled from "styled-components"
import Cell from "../Cell"
import * as variants from "../variants"
import * as Types from "./types"

const Row = styled.tr`
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
`

const THeadRow = styled(Row)`
    color: ${({ theme }) => theme.colors.grey[0]};
    background-color: ${({ theme }) => theme.colors.grey[5]};
    font-family: ${({ theme }) => theme.fonts.generic[4]};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
`

const CollapsibleRowWrapper = styled(Row)`
    border: none;
`

const CollapsibleRow = styled(Row)<Types.TableRowCollapsibleStyledProps>`
    ${({ $active }) => variants[$active ? "tertiary" : "primary"]};
    border-bottom: ${({ $active, theme }) =>
        $active ? "none" : `1px solid ${theme.colors.grey[4]}`};

    &:hover {
        ${({ $active }) => !$active && variants["secondary"]};
        cursor: pointer;
    }
`

const CollapsibleEmptyCell = styled(Cell)`
    width: 1%;
`

const CollapsibleIconCell = styled(Cell)`
    text-align: right;
`

const CollapsibleCell = styled(Cell)`
    padding: 0px;
`

export {
    Row,
    THeadRow,
    CollapsibleRow,
    CollapsibleRowWrapper,
    CollapsibleIconCell,
    CollapsibleCell,
    CollapsibleEmptyCell,
}
