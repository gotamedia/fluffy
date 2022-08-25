import styled from "styled-components"
import border from "../border"
import * as Types from "../types"

const Table = styled.table<Types.TableBorderStyledProps>`
    ${border}
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
