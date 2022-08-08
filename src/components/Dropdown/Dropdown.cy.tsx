import Dropdown from './index'

describe('Dropdown', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Dropdown label={'Open'}>
                    {null}
                </Dropdown>
            )
        })
    })
})