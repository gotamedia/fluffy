import { default as TableBody } from "./components/Body"
import { default as TableCaption } from "./components/Caption"
import { default as TableCell } from "./components/Cell"
import { default as TableFoot } from "./components/Foot"
import { default as TableHead } from "./components/Head"
import { default as TableRow } from "./components/Row"
import { default as BaseTable } from "./components/Table"

interface TableComponents {
    Caption: typeof TableCaption
    Cell: typeof TableCell
    Body: typeof TableBody
    Foot: typeof TableFoot
    Head: typeof TableHead
    Row: typeof TableRow
}

type TableComponentType = typeof BaseTable & TableComponents

export { TableComponentType }
