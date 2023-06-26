import Ribbon from './index'

const ribbonSelector = '[data-cy=ribbon]'

describe('Ribbon', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Ribbon background={"red"}>
                    {'Live!'}
                </Ribbon>
            )
        })

        it('Should render text', () => {
            cy.mount(
                <Ribbon background={"red"} data-cy={'ribbon'}>
                    {'Live!'}
                </Ribbon>
            )

            cy.get(ribbonSelector).should('have.text', 'Live!')
        })

    })
})
