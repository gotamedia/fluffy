import { default as BasicContent } from "./content/basic.json"
import { Basic as Table } from "./stories/Basic.stories"

describe("Basic Table", () => {
    it("should not crash", () => {
        cy.mount(<Table {...BasicContent} />)
    })

    it("should render table", () => {
        cy.mount(<Table {...BasicContent} />)
        cy.get("table").should("be.visible")
    })

    it("should not contain <td> elements inside <thead>", () => {
        cy.mount(<Table {...BasicContent} />)
        cy.get("thead").find("td").should("have.length", 0)
    })

    it("should not contain <th> elements inside <tbody>", () => {
        cy.mount(<Table {...BasicContent} />)
        cy.get("thead").find("td").should("have.length", 0)
    })

    it("should not contain <th> elements inside <tfoot>", () => {
        cy.mount(<Table {...BasicContent} />)
        cy.get("thead").find("td").should("have.length", 0)
    })
})
