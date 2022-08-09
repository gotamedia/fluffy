import Select from './index'

describe('Select', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Select>
                    {null}
                </Select>
            )
        })
    })
})