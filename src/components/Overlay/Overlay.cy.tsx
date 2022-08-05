import Overlay from './index'

describe('Overlay', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Overlay>
                </Overlay>
            )
        })
    })
})