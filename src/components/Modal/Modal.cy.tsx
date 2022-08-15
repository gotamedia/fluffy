import Modal from './index'

describe('Modal', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Modal>
                </Modal>
            )
        })
    })
})