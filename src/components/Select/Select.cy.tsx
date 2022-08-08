import Select from './index'

describe('Select', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Select selected={[]}>
                    {null}
                </Select>
            )
        })
    })
})