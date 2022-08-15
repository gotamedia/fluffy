import Sheet from './index'

describe('Sheet', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Sheet>
                </Sheet>
            )
        })
    })
})