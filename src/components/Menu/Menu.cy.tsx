import Menu from './index'

describe('Menu', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Menu show={true}>
                    {null}
                </Menu>
            )
        })
    })
})