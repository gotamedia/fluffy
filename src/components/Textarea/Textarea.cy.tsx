import { tint } from 'polished'

import { theme } from '../../utils/theme'

import Textarea, {
    TextareaVariants,
    TextareaSizes
} from './index'

const textareaSelector = '[data-cy=textarea]'
const disabledTextareaSelector = '[data-cy=textarea-disabled]'

describe('Textarea', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Textarea />
            )
        })
    
        it('Should render value', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    value={'Textarea value'}
                />
            )
    
            cy.get(textareaSelector).should('have.value', 'Textarea value')
        })

        it('Should render label', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    label={'My textarea label'}
                />
            )
    
            cy.contains('label').and('include.text', 'My textarea label')
        })
    
        it('Should call onChange callback', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(textareaSelector).realClick()
            cy.realType('Textarea value')
    
            cy.get('@onChangeSpy').should('have.been.calledWithMatch', Object)
            cy.get(textareaSelector).should('have.value', 'Textarea value')
        })

        it('Should call onValueChange callback', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(textareaSelector).realClick()
            cy.realType('Textarea value')
    
            cy.get('@onValueChangeSpy').should('have.been.calledWith', 'Textarea value')
            cy.get(textareaSelector).should('have.value', 'Textarea value')
        })
    
        it('Should render disabled textarea', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    disabled
                />
            )
    
            cy.get(textareaSelector).should('be.disabled')
        })
    
        it('Should NOT call onChange while disabled', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    disabled
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(textareaSelector).realClick()
            cy.realType('Textarea value')
    
            cy.get('@onChangeSpy').should('not.have.been.called')
            cy.get(textareaSelector).should('not.have.value', 'Textarea value')
        })

        it('Should NOT call onValueChange callback while disabled', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    disabled
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(textareaSelector).realClick()
            cy.realType('Textarea value')
    
            cy.get('@onValueChangeSpy').should('not.have.been.called')
            cy.get(textareaSelector).should('not.have.value', 'Textarea value')
        })
    })

    describe('Variants', () => {
        it('Should render an textarea with "primary" variant', () => {
            cy.mount(
                <>
                    <Textarea
                        data-cy={'textarea-disabled'}
                        disabled
                        variant={TextareaVariants.Primary}
                    />
    
                    <Textarea
                        data-cy={'textarea'}
                        variant={TextareaVariants.Primary}
                    />
                </>
            )
    
            // idle
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
            cy.get(textareaSelector)
                .should('have.css', 'border-width', '1px')
                .and('have.css', 'border-style', 'solid')
                .and('have.css', 'border-color')
                .and('be.colored', theme.colors.brand)
    
            // hover
            cy.get(textareaSelector).realHover()
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(textareaSelector).realClick()
            cy.get(textareaSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledTextareaSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    
        it('Should render an textarea with "secondary" variant', () => {
            cy.mount(
                <>
                    <Textarea
                        data-cy={'textarea-disabled'}
                        disabled
                        variant={TextareaVariants.Secondary}
                    />
    
                    <Textarea
                        data-cy={'textarea'}
                        variant={TextareaVariants.Secondary}
                    />
                </>
            )
    
            // idle
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
            cy.get(textareaSelector)
                .should('not.have.css', 'border-width', '1px')
    
            // hover
            cy.get(textareaSelector).realHover()
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(textareaSelector).realClick()
            cy.get(textareaSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledTextareaSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    
        it('Should render an textarea with "outline" variant', () => {
            cy.mount(
                <>
                    <Textarea
                        data-cy={'textarea-disabled'}
                        disabled
                        variant={TextareaVariants.Outline}
                    />
    
                    <Textarea
                        data-cy={'textarea'}
                        variant={TextareaVariants.Outline}
                    />
                </>
            )
    
            // idle
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'white')
            cy.get(textareaSelector)
                .should('have.css', 'border-width', '1px')
                .and('have.css', 'border-style', 'solid')
                .and('have.css', 'border-color')
                .and('be.colored', theme.colors.brand)
    
            // hover
            cy.get(textareaSelector).realHover()
            cy.get(textareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(textareaSelector).realClick()
            cy.get(textareaSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledTextareaSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledTextareaSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    })

    describe('Sizes', () => {
        it('Should render an textarea with "tiny" size', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    size={TextareaSizes.Tiny}
                />
            )
    
            cy.get(textareaSelector)
                .should('have.css', 'height', '70px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'padding', '8px')
        })

        it('Should render an textarea with "small" size', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    size={TextareaSizes.Small}
                />
            )
    
            cy.get(textareaSelector)
                .should('have.css', 'height', '80px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'padding', '12px')
        })

        it('Should render an textarea with "normal" size', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    size={TextareaSizes.Normal}
                />
            )
    
            cy.get(textareaSelector)
                .should('have.css', 'height', '90px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'padding', '16px')
        })

        it('Should render an textarea with "big" size', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    size={TextareaSizes.Big}
                />
            )
    
            cy.get(textareaSelector)
                .should('have.css', 'height', '100px')
                .and('have.css', 'min-width', '325px')
                .and('have.css', 'font-size', '18px')
                .and('have.css', 'padding', '18px')
        })

        it('Should render an textarea with "huge" size', () => {
            cy.mount(
                <Textarea
                    data-cy={'textarea'}
                    size={TextareaSizes.Huge}
                />
            )
    
            cy.get(textareaSelector)
                .should('have.css', 'height', '120px')
                .and('have.css', 'min-width', '350px')
                .and('have.css', 'font-size', '22px')
                .and('have.css', 'padding', '20px')
        })
    })
})