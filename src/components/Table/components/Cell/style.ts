import styled from "styled-components"
import { cellSizesStyleFn } from "./sizes"
import * as Types from "./types"

const Cell = styled.td<Types.TableCellProps>`
    ${cellSizesStyleFn}
`

export { Cell }
