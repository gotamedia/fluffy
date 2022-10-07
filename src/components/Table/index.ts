import TableBody from "./components/Body"
import TableCaption from "./components/Caption"
import TableCell from "./components/Cell"
import TableFoot from "./components/Foot"
import TableHead from "./components/Head"
import TableRow from "./components/Row"
import BaseTable from "./components/Table"
import { TableComponentType } from "./types"
export type { TableBodyComponent, TableBodyProps } from "./components/Body"
export type { TableCaptionComponent, TableCaptionProps } from "./components/Caption"
export type { TableCellComponent, TableCellProps } from "./components/Cell"
export type { TableFootComponent, TableFootProps } from "./components/Foot"
export type { TableHeadComponent, TableHeadProps } from "./components/Head"
export type { TableRowComponent, TableRowProps } from "./components/Row"
export type { TableComponent, TableProps } from "./components/Table"

const Table = BaseTable as TableComponentType
Table.Body = TableBody
Table.Body.displayName = "Table.Body"
Table.Caption = TableCaption
Table.Caption.displayName = "Table.Caption"
Table.Cell = TableCell
Table.Cell.displayName = "Table.Cell"
Table.Foot = TableFoot
Table.Foot.displayName = "Table.Foot"
Table.Head = TableHead
Table.Head.displayName = "Table.Head"
Table.Row = TableRow
Table.Row.displayName = "Table.Row"

export default Table
