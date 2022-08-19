import Table from "./"
import { TableContext } from "./components/context"

describe("<Table>", () => {
    it("mounts", () => {
        cy.mount(<Table />)
    })
})

describe("<Table.Caption>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Caption />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Head>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Head />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Body>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Body />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Foot>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Foot />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Row>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }
    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Row />
            </TableContext.Provider>
        )
    })
})

describe("<Table.Cell>", () => {
    const defaultContext = { state: {}, parentState: {}, type: null, parentType: null }

    it("mounts", () => {
        cy.mount(
            <TableContext.Provider value={defaultContext}>
                <Table.Cell>{"Mounts"}</Table.Cell>
            </TableContext.Provider>
        )
    })

    it("Renders as <th>", () => {
        const thContext = { ...defaultContext, type: "th", parentType: "thead" } as const
        cy.mount(
            <TableContext.Provider value={thContext}>
                <Table.Cell>{"Table head cell <th> in bold text"}</Table.Cell>
            </TableContext.Provider>
        ).then(($tabelCell) => {
            cy.wrap($tabelCell).get("th")
        })
    })

    it("Renders as <td>", () => {
        const tdContext = { ...defaultContext, type: "td", parentType: "tbody" } as const
        cy.mount(
            <TableContext.Provider value={tdContext}>
                <Table.Cell>{"Table data cell <td>"}</Table.Cell>
            </TableContext.Provider>
        ).then(($tabelCell) => {
            cy.wrap($tabelCell).get("td")
        })
    })
})
