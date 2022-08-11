import Collapsible from "./index"

describe("Collapsible", () => {
    describe("Functionality", () => {
        it("Should not crash", () => {
            cy.mount(<Collapsible>{null}</Collapsible>)
        })
    })
})
