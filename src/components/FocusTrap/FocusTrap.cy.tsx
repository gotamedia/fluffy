import FocusTrap from './index'

describe('FocusTrap', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <FocusTrap>
                </FocusTrap>
            )
        })
    })
})