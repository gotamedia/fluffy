import './commands'
import { mount } from 'cypress/react'
import '@testing-library/cypress/add-commands'

import chaiColors from 'chai-colors'
import 'cypress-real-events/support'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

chai.use(chaiColors)

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
        }
    }
}

Cypress.Commands.add('mount', (component, options) => {
    const wrapped = WithThemeProvider(component)

    return mount(wrapped, options)
})