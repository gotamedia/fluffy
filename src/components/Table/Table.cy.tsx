import { ReactNode } from "react"
import Table from "./"
import { TableContext } from "./components/context"

const context = {
    state: {
        collapsible: false,
    },
    parentState: {},
    type: null,
    parentType: null,
}

const TableMount = (jsx: ReactNode, overridesContext = {}) =>
    cy.mount(
        <TableContext.Provider value={{ ...context, ...overridesContext }}>
            {jsx}
        </TableContext.Provider>
    )

describe("<Table>", () => {
    it("mounts", () => {
        cy.mount(<Table />)
    })
})

describe("<Table.Caption>", () => {
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={context}>
                <Table.Caption />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Head>", () => {
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={context}>
                <Table.Head />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Body>", () => {
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={context}>
                <Table.Body />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Foot>", () => {
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={context}>
                <Table.Foot />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Row>", () => {
    it("mounts", () => TableMount(<Table.Row />))

    describe("Collapsible", () => {
        const collapsible = "[data-cy=collapsible]"
        const hidden = "[data-cy=hidden]"

        it("should expand and close on click", () => {
            const collapsibleContext = { state: { collapsible: true }, type: "tbody" } as const
            TableMount(
                <Table.Row
                    data-cy={"collapsible"}
                    hiddenElement={<div data-cy={"hidden"}>{"hidden"}</div>}
                    children={<Table.Cell>{"visible"}</Table.Cell>}
                />,
                collapsibleContext
            )

            cy.get(collapsible)
                .click()
                .then(($tabelRow) => {
                    cy.wrap($tabelRow).get(hidden).should("be.visible")
                    cy.wrap($tabelRow).click().get(hidden).should("not.be.visible")
                })
        })
    })
})

describe("<Table.Cell>", () => {
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={context}>
                <Table.Cell>{"Mounts"}</Table.Cell>
            </TableContext.Provider>
        )
    })

    it("renders a <th> element inside <Table.Head>", () => {
        const thContext = { ...context, parentType: "thead" } as const

        cy.mount(
            <TableContext.Provider value={thContext}>
                <Table.Cell>{"Table head cell <th> in bold text"}</Table.Cell>
            </TableContext.Provider>
        ).then(($tabelCell) => {
            cy.wrap($tabelCell).get("th")
        })
    })

    it("renders a <td> element inside <Table.Body>", () => {
        const tdContext = { ...context, parentType: "tbody" } as const

        cy.mount(
            <TableContext.Provider value={tdContext}>
                <Table.Cell>{"Table data cell <td>"}</Table.Cell>
            </TableContext.Provider>
        ).then(($tabelCell) => {
            cy.wrap($tabelCell).get("td")
        })
    })

    it("renders a <td> element inside <Table.Foot>", () => {
        const tdContext = { ...context, parentType: "tfoot" } as const

        cy.mount(
            <TableContext.Provider value={tdContext}>
                <Table.Cell>{"Table data cell <td>"}</Table.Cell>
            </TableContext.Provider>
        ).then(($tabelCell) => {
            cy.wrap($tabelCell).get("td")
        })
    })
})
