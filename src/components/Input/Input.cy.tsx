import { tint } from 'polished'

import { theme } from '../../utils/theme'

import Input, {
    InputVariants,
    InputSizes
} from './index'

const inputSelector = '[data-cy=input]'
const disabledInputSelector = '[data-cy=input-disabled]'

describe('Input', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Input />
            )
        })
    
        it('Should render value', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    value={'Input value'}
                />
            )
    
            cy.get(inputSelector).should('have.value', 'Input value')
        })

        it('Should render label', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    label={'My input label'}
                />
            )
    
            cy.contains('label').and('include.text', 'My input label')
        })
    
        it('Should call onChange callback', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Input
                    data-cy={'input'}
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(inputSelector).realClick()
            cy.realType('Input value')
    
            cy.get('@onChangeSpy').should('have.been.calledWithMatch', Object)
            cy.get(inputSelector).should('have.value', 'Input value')
        })

        it('Should call onValueChange callback', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Input
                    data-cy={'input'}
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(inputSelector).realClick()
            cy.realType('Input value')
    
            cy.get('@onValueChangeSpy').should('have.been.calledWith', 'Input value')
            cy.get(inputSelector).should('have.value', 'Input value')
        })
    
        it('Should render disabled input', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    disabled
                />
            )
    
            cy.get(inputSelector).should('be.disabled')
        })
    
        it('Should NOT call onChange while disabled', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Input
                    data-cy={'input'}
                    disabled
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(inputSelector).realClick()
            cy.realType('Input value')
    
            cy.get('@onChangeSpy').should('not.have.been.called')
            cy.get(inputSelector).should('not.have.value', 'Input value')
        })
    })

    describe('Variants', () => {
        it('Should render an input with "primary" variant', () => {
            cy.mount(
                <>
                    <Input
                        data-cy={'input-disabled'}
                        disabled
                        variant={InputVariants.Primary}
                    />
    
                    <Input
                        data-cy={'input'}
                        variant={InputVariants.Primary}
                    />
                </>
            )
    
            // idle
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
            cy.get(inputSelector)
                .should('have.css', 'border-width', '1px')
                .and('have.css', 'border-style', 'solid')
                .and('have.css', 'border-color')
                .and('be.colored', theme.colors.brand)
    
            // hover
            cy.get(inputSelector).realHover()
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(inputSelector).realClick()
            cy.get(inputSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledInputSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledInputSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledInputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    
        it('Should render an input with "secondary" variant', () => {
            cy.mount(
                <>
                    <Input
                        data-cy={'input-disabled'}
                        disabled
                        variant={InputVariants.Secondary}
                    />
    
                    <Input
                        data-cy={'input'}
                        variant={InputVariants.Secondary}
                    />
                </>
            )
    
            // idle
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
            cy.get(inputSelector)
                .should('not.have.css', 'border-width', '1px')
    
            // hover
            cy.get(inputSelector).realHover()
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(inputSelector).realClick()
            cy.get(inputSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledInputSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledInputSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledInputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    
        it('Should render an input with "outline" variant', () => {
            cy.mount(
                <>
                    <Input
                        data-cy={'input-disabled'}
                        disabled
                        variant={InputVariants.Outline}
                    />
    
                    <Input
                        data-cy={'input'}
                        variant={InputVariants.Outline}
                    />
                </>
            )
    
            // idle
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', 'white')
            cy.get(inputSelector)
                .should('have.css', 'border-width', '1px')
                .and('have.css', 'border-style', 'solid')
                .and('have.css', 'border-color')
                .and('be.colored', theme.colors.brand)
    
            // hover
            cy.get(inputSelector).realHover()
            cy.get(inputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.93, theme.colors.brand))
    
            // focus
            cy.get(inputSelector).realClick()
            cy.get(inputSelector).should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')
    
            // disabled
            cy.get(disabledInputSelector)
                .should('have.css', 'color')
                .and('be.colored', '#8A8A8D')
            cy.get(disabledInputSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#DADAD8')
            cy.get(disabledInputSelector)
                .should('have.css', 'background-color')
                .and('be.colored', '#F5F5F5')
        })
    })

    describe('Sizes', () => {
        it('Should render an input with "tiny" size', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    size={InputSizes.Tiny}
                />
            )
    
            cy.get(inputSelector)
                .should('have.css', 'height', '24px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '14px')
                .and('have.css', 'padding', '0px 8px')
        })

        it('Should render an input with "small" size', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    size={InputSizes.Small}
                />
            )
    
            cy.get(inputSelector)
                .should('have.css', 'height', '32px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'padding', '0px 8px')
        })

        it('Should render an input with "normal" size', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    size={InputSizes.Normal}
                />
            )
    
            cy.get(inputSelector)
                .should('have.css', 'height', '40px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'padding', '0px 10px')
        })

        it('Should render an input with "big" size', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    size={InputSizes.Big}
                />
            )
    
            cy.get(inputSelector)
                .should('have.css', 'height', '48px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '18px')
                .and('have.css', 'padding', '0px 16px')
        })

        it('Should render an input with "huge" size', () => {
            cy.mount(
                <Input
                    data-cy={'input'}
                    size={InputSizes.Huge}
                />
            )
    
            cy.get(inputSelector)
                .should('have.css', 'height', '50px')
                .and('have.css', 'min-width', '300px')
                .and('have.css', 'font-size', '22px')
                .and('have.css', 'padding', '0px 18px')
        })
    })
})