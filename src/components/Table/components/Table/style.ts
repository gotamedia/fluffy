import styled from "styled-components"

const Table = styled.table`
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    text-align: left;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    font-family: ${({ theme }) => theme.fonts.generic[5]};
`

export { Table }
