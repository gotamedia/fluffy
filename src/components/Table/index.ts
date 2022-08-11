import TableBody from "./components/Body"
import TableCaption from "./components/Caption"
import TableCell from "./components/Cell"
import TableFoot from "./components/Foot"
import TableHead from "./components/Head"
import TableRow from "./components/Row"
import BaseTable from "./components/Table"
import { TableComponentType } from "./types"

export * from "./types"

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
