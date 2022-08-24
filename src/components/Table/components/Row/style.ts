import styled from "styled-components"
import Cell from "../Cell"

const Row = styled.tr`
    color: black;
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[4]}`};
`

const HeadRow = styled(Row)`
    color: ${({ theme }) => theme.colors.grey[1]};
    font-family: ${({ theme }) => theme.fonts.generic[4]};
    background-color: ${({ theme }) => theme.colors.grey[5]};
`

const CollapsibleRow = styled(Row)<{ $active?: boolean }>`
    background-color: ${({ $active }) => $active && "black"}};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : "black")}};

    &:hover {
        cursor: pointer;
        background-color: ${({ $active, theme }) => !$active && theme.colors.grey[5]};
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
