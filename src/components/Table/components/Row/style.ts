import styled from "styled-components"
import Cell from "../Cell"
import variant from "../variant"
import * as Types from "./types"

const Row = styled.tr<Types.TableRowStyledProps>`
    ${variant}
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
`

const HeadRow = styled(Row)<Types.TableRowStyledProps>`
    ${variant}
    font-family: ${({ theme }) => theme.fonts.generic[4]};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
`

const CollapsibleRowWrapper = styled(Row)`
    border: none;
`

const CollapsibleRow = styled(Row)<Types.TableRowCollapsibleStyledProps>`
    ${variant}
    border-bottom: ${({ $active, theme }) =>
        $active ? "none" : `1px solid ${theme.colors.grey[4]}`};

    &:hover {
        cursor: pointer;
    }
`

const CollapsibleEmptyCell = styled(Cell)`
    width: 5%;
`

const CollapsibleIconCell = styled(Cell)`
    text-align: right;
`

const CollapsibleCell = styled(Cell)`
    padding: 0px;
`

export {
    Row,
    HeadRow,
    CollapsibleRow,
    CollapsibleRowWrapper,
    CollapsibleIconCell,
    CollapsibleCell,
    CollapsibleEmptyCell,
}
