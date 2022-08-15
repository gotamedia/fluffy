import React from "react"
import TableBody from "../components/Body"
import TableCaption from "../components/Caption"
import TableCell from "../components/Cell"
import TableFoot from "../components/Foot"
import TableHead from "../components/Head"
import TableRow from "../components/Row"
import Table from "../components/Table"
import { default as basicContent } from "./content/basic.json"

const BasicComponent = ({ caption, headRows, bodyRows, footRows }) => (
    <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHead>
            <TableRow>
                {headRows.map((cell) => (
                    <TableCell key={cell.id}>{cell.label}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {bodyRows.map((cell) => (
                <TableRow key={cell.name}>
                    <TableCell>{cell.name}</TableCell>
                    <TableCell>{cell.wins}</TableCell>
                    <TableCell>{cell.score}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFoot>
            <TableRow>
                {footRows.map((cell) => (
                    <TableCell key={cell.id}>{cell.label}</TableCell>
                ))}
            </TableRow>
        </TableFoot>
    </Table>
)

const Template = (args) => BasicComponent(args)
export const Basic = Template.bind({})
Basic.args = basicContent

export default {
    title: "Developments/Components/Table",
    argTypes: {
        caption: {
            table: {
                disable: true,
            },
        },
        headRows: {
            table: {
                disable: true,
            },
        },
        bodyRows: {
            table: {
                disable: true,
            },
        },
        footRows: {
            table: {
                disable: true,
            },
        },
    },
}
