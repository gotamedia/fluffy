/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainer<Subject> {
        /**
         * Custom Chai assertion that checks if given subject matchs "color"
         *
         * @example
         ```
        expect('color').to.be.colored('white')
        cy.wrap('color').should('be.colored', 'white')
        ```
        * */
        (chainer: 'be.colored'): Chainer<Subject>

        /**
         * Custom Chai assertion that checks if given subject does NOT match "color"
         *
         * @example
         ```
        expect('color').to.not.be.colored('white')
        cy.wrap('color').should('not.be.colored', 'white')
        ```
        * */
        (chainer: 'not.be.colored'): Chainer<Subject>
    }

    interface Chainable<Subject> {
        cssBefore(property: string): Chainable<Subject>

        cssAfter(property: string): Chainable<Subject>
    }
}

declare module 'chai-colors'