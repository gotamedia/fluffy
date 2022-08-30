import React from "react"
import Table from "../index"

import Image from "../../Image"
import collapsibleContent from "../content/collapsible.json"

const CollapsibleComponent = () => {
    const { headRows, bodyRows } = collapsibleContent

    return (
        <Table collapsible size={"medium"} border={"bordered"}>
            <Table.Head>
                <Table.Row>
                    {headRows.map(({ id, label }) => (
                        <Table.Cell key={id}>{label}</Table.Cell>
                    ))}
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {bodyRows.map(({ name, description, hiddenImage }) => (
                    <Table.Row
                        key={name}
                        border={"top"}
                        hiddenElement={<Image src={hiddenImage} width={"100%"} />}
                    >
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{description}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

export const Collapsible = CollapsibleComponent.bind({})

export default {
    title: "Components/Table",
}
