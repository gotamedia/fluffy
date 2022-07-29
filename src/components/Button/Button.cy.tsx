import {
    tint,
    shade
} from 'polished'

import { theme } from '../../utils/theme'

import Button, {
    ButtonVariants,
    ButtonSizes
} from './index'

const buttonSelector = '[data-cy=button]'
const disabledButtonSelector = '[data-cy=button-disabled]'

describe('Button', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Button>
                    {'Click me!'}
                </Button>
            )
        })
    
        it('Should render text', () => {
            cy.mount(
                <Button data-cy={'button'}>
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector).should('have.text', 'Click me!')
        })
    
        it('Should call onClick callback', () => {
            const onClickSpy = cy.spy().as('onClickSpy')
    
            cy.mount(
                <Button
                    data-cy={'button'}
                    onClick={onClickSpy}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector).click()
            cy.get('@onClickSpy').should('have.been.called')
        })
    
        it('Should render disabled button', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    disabled
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector).should('be.disabled')
        })
    
        it('Should NOT call onClick callback while disabled', () => {
            const onClickSpy = cy.spy().as('onClickSpy')
    
            cy.mount(
                <Button
                    data-cy={'button'}
                    disabled
                    onClick={onClickSpy}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector).click({force: true})
            cy.get('@onClickSpy').should('not.have.been.called')
        })
    })

    describe('Variants', () => {
        it('Should render a button with "primary" variant', () => {
            cy.mount(
                <>
                    <Button
                        data-cy={'button-disabled'}
                        disabled
                        variant={ButtonVariants.Primary}
                    >
                        {'Click me!'}
                    </Button>
                    
                    <Button
                        data-cy={'button'}
                        variant={ButtonVariants.Primary}
                    >
                        {'Click me!'}
                    </Button>
                </>
            )
    
            // idle
            cy.get(buttonSelector)
                .should('have.css', 'color')
                .and('be.colored', 'white')
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', theme.colors.brand)
    
            // hover
            cy.get(buttonSelector).realHover()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', shade(0.08, theme.colors.brand))
    
            // active
            cy.get(buttonSelector).realMouseDown()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', shade(0.18, theme.colors.brand))
    
            // focus
            cy.get(buttonSelector).realMouseUp()
            cy.get(buttonSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledButtonSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledButtonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#DADAD8')
        })
    
        it('Should render a button with "secondary" variant', () => {
            cy.mount(
                <>
                    <Button
                        data-cy={'button-disabled'}
                        disabled
                        variant={ButtonVariants.Secondary}
                    >
                        {'Click me!'}
                    </Button>
    
                    <Button
                        data-cy={'button'}
                        variant={ButtonVariants.Secondary}
                    >
                        {'Click me!'}
                    </Button>
                </>
            )
    
            // idle
            cy.get(buttonSelector)
                .should('have.css', 'color')
                .and('be.colored', theme.colors.brand)
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // hover
            cy.get(buttonSelector).realHover()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.88, theme.colors.brand))
    
            // active
            cy.get(buttonSelector).realMouseDown()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.82, theme.colors.brand))
    
            // focus
            cy.get(buttonSelector).realMouseUp()
            cy.get(buttonSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledButtonSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledButtonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#DADAD8')
        })
    
        it('Should render a button with "outline" variant', () => {
            cy.mount(
                <>
                    <Button
                        data-cy={'button-disabled'}
                        disabled
                        variant={ButtonVariants.Outline}
                    >
                        {'Click me!'}
                    </Button>
    
                    <Button
                        data-cy={'button'}
                        variant={ButtonVariants.Outline}
                    >
                        {'Click me!'}
                    </Button>
                </>
            )
    
            // idle
            cy.get(buttonSelector)
                .should('have.css', 'color')
                .and('be.colored', theme.colors.brand)
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'white')
    
            // hover
            cy.get(buttonSelector).realHover()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.88, theme.colors.brand))
    
            // active
            cy.get(buttonSelector).realMouseDown()
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.82, theme.colors.brand))
    
            // focus
            cy.get(buttonSelector).realMouseUp()
            cy.get(buttonSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledButtonSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledButtonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'transparent')
        })
    
        it('Should render a button with "text" variant', () => {
            cy.mount(
                <>
                    <Button
                        data-cy={'button-disabled'}
                        disabled
                        variant={ButtonVariants.Text}
                    >
                        {'Click me!'}
                    </Button>
    
                    <Button
                        data-cy={'button'}
                        variant={ButtonVariants.Text}
                    >
                        {'Click me!'}
                    </Button>
                </>
            )
    
            // idle
            cy.get(buttonSelector)
                .should('have.css', 'color')
                .and('be.colored', theme.colors.brand)
            cy.get(buttonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'transparent')
            cy.get(buttonSelector).should('have.css', 'padding', '0px')
    
            // hover
            cy.get(buttonSelector).realHover()
            cy.get(buttonSelector).should('have.css', 'text-decoration-line', 'underline')
    
            // active
            cy.get(buttonSelector).realMouseDown()
            cy.get(buttonSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // focus
            cy.get(buttonSelector).realMouseUp()
            cy.get(buttonSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledButtonSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledButtonSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'transparent')
        })
    })

    describe('Sizes', () => {
        it('Should render a button with "tiny" size', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    size={ButtonSizes.Tiny}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector)
                .should('have.css', 'height', '24px')
                .and('have.css', 'min-width', '24px')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'padding', '0px 8px')
        })
    
        it('Should render a button with "small" size', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    size={ButtonSizes.Small}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector)
                .should('have.css', 'height', '32px')
                .and('have.css', 'min-width', '32px')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'padding', '0px 12px')
        })
    
        it('Should render a button with "normal" size', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    size={ButtonSizes.Normal}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector)
                .should('have.css', 'height', '40px')
                .and('have.css', 'min-width', '40px')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'padding', '0px 16px')
        })
    
        it('Should render a button with "big" size', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    size={ButtonSizes.Big}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector)
                .should('have.css', 'height', '48px')
                .and('have.css', 'min-width', '48px')
                .and('have.css', 'font-size', '18px')
                .and('have.css', 'padding', '0px 18px')
        })
    
        it('Should render a button with "huge" size', () => {
            cy.mount(
                <Button
                    data-cy={'button'}
                    size={ButtonSizes.Huge}
                >
                    {'Click me!'}
                </Button>
            )
    
            cy.get(buttonSelector)
                .should('have.css', 'height', '50px')
                .and('have.css', 'min-width', '50px')
                .and('have.css', 'font-size', '20px')
                .and('have.css', 'padding', '0px 20px')
        })
    })
})