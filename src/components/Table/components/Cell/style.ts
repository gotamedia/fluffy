import styled from "styled-components"
import border from "../border"
import { cellSizesStyleFn } from "./sizes"
import * as Types from "./types"

const Cell = styled.td<Types.TableCellStyledProps>`
    ${cellSizesStyleFn}
    ${border}
`

export { Cell }
