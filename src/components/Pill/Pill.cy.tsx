import { theme } from '../../utils/theme'

import Pill from './index'

const pillSelector = '[data-cy=pill]'

describe('Pill', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Pill>
                    {'Live!'}
                </Pill>
            )
        })

        it('Should render text', () => {
            cy.mount(
                <Pill data-cy={'pill'}>
                    {'Live!'}
                </Pill>
            )

            cy.get(pillSelector).should('have.text', 'Live!')
        })

    })

    describe('Variants', () => {
        it('Should render a button with "alert" variant', () => {
            cy.mount(
                <>
                    <Pill
                        data-cy={'pill'}
                        variant={"alert"}
                    >
                        {'Superlive!'}
                    </Pill>


                </>
            )

            // idle
            cy.get(pillSelector)
                .should('have.css', 'color')
                .and('be.colored', 'white')
            cy.get(pillSelector)
                .should('have.css', 'background-color')
                .and('be.colored', theme.colors.pill.alert)
        })
    })
})