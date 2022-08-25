import React from "react"
import Table from "../index"

import basicContent from "../content/basic.json"

const BasicComponent = () => {
    const { caption, headRows, bodyRows, footRows } = basicContent

    return (
        <Table border={"bordered"}>
            <Table.Caption>{caption}</Table.Caption>
            <Table.Head>
                <Table.Row>
                    {headRows.map((cell) => (
                        <Table.Cell key={cell.id}>{cell.label}</Table.Cell>
                    ))}
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {bodyRows.map((cell) => (
                    <Table.Row key={cell.name} border={"top"}>
                        <Table.Cell>{cell.name}</Table.Cell>
                        <Table.Cell>{cell.wins}</Table.Cell>
                        <Table.Cell>{cell.score}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            <Table.Foot>
                <Table.Row border={"top"}>
                    {footRows.map((cell) => (
                        <Table.Cell key={cell.id}>{cell.label}</Table.Cell>
                    ))}
                </Table.Row>
            </Table.Foot>
        </Table>
    )
}

export const Basic = BasicComponent.bind({})

export default {
    title: "Components/Table",
}
