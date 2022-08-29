import Popover from './index'

describe('Popover', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Popover show={true}>
                    {null}
                </Popover>
            )
        })
    })
})