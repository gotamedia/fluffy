import styled from "styled-components"
import border from "../border"
import Cell from "../Cell"
import theme from "../theme"
import * as Types from "./types"

const Row = styled.tr<Types.TableRowStyledProps>`
    ${border}
    ${theme}
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-family: ${({ theme }) => theme.fonts.generic[5]};
`

const HeadRow = styled(Row)<Types.TableRowStyledProps>`
    ${border}
    ${theme}
    font-family: ${({ theme }) => theme.fonts.generic[4]};
`

const CollapsibleRow = styled(Row)<Types.TableRowCollapsibleStyledProps>`
    ${border}
    ${theme}
    border-bottom: ${({ $active }) => $active && "none"};
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
    CollapsibleIconCell,
    CollapsibleCell,
    CollapsibleEmptyCell,
}
