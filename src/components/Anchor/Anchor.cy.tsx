import Anchor from './index'

describe('Anchor', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Anchor>
                </Anchor>
            )
        })
    })
})