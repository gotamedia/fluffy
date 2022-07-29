import { tint } from 'polished'

import { theme } from '../../utils/theme'

import Checkbox, { CheckboxSizes } from './index'

const checkboxSelector = '[data-cy=checkbox]'
const disabledCheckboxSelector = '[data-cy=disabled-checkbox]'

describe('Checkbox', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Checkbox />
            )
        })


        it('Should render label', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    label={'My checkbox label'}
                />
            )
    
            cy.contains('label').and('include.text', 'My checkbox label')
        })

        it('Should render checked', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    checked={true}
                />
            )
    
            cy.get(checkboxSelector).should('be.checked')
        })

        it('Should NOT render checked', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    checked={false}
                />
            )
    
            cy.get(checkboxSelector).should('not.be.checked')
        })
    
        it('Should call onChange callback', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(checkboxSelector).realClick()
            cy.get('@onChangeSpy').should('have.been.calledWithMatch', Object)
            cy.get(checkboxSelector).should('be.checked')
        })

        it('Should call onValueChange callback', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(checkboxSelector).realClick()
            cy.get('@onValueChangeSpy').should('have.been.calledWith', true)
            cy.get(checkboxSelector).should('be.checked')
        })
    
        it('Should render disabled checkbox', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    disabled
                />
            )
    
            cy.get(checkboxSelector).should('be.disabled')
        })
    
        it('Should NOT call onChange while disabled', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    disabled
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(checkboxSelector).realClick()    
            cy.get('@onChangeSpy').should('not.have.been.called')
            cy.get(checkboxSelector).should('not.be.checked')
        })

        it('Should NOT call onValueChange while disabled', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    disabled
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(checkboxSelector).realClick()    
            cy.get('@onValueChangeSpy').should('not.have.been.called')
            cy.get(checkboxSelector).should('not.be.checked')
        })
    })

    describe('Variants', () => {
        it('Should render valid checkbox style', () => {
            cy.mount(
                <>
                    <Checkbox
                        data-cy={'disabled-checkbox'}
                        disabled
                    />
                    <Checkbox data-cy={'checkbox'} />
                </>
            )
            
            // idle
            cy.get(checkboxSelector)
                .should('have.css', 'border-width', '2px')
                .and('have.css', 'border-style', 'solid')
                .and('have.css', 'border-radius', '4px')
                .and('have.css', 'border-color')
                .and('be.colored', theme.colors.brand)

            // hover
            cy.get(checkboxSelector).realHover()
            cy.get(checkboxSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.90, theme.colors.brand))

            // active
            cy.get(checkboxSelector).realMouseDown()
            cy.get(checkboxSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.82, theme.colors.brand))

            // foucs
            cy.get(checkboxSelector).realMouseUp()
            cy.get(checkboxSelector)
                .should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')

            // foucs
            cy.get(checkboxSelector).realMouseUp()
            cy.get(checkboxSelector)
                .should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')

            // disabled
            cy.get(disabledCheckboxSelector)
                .should('have.css', 'border-color')
                .and('be.colored', '#959495')
            cy.get(disabledCheckboxSelector)
                .should('have.css', 'color')
                .and('be.colored', '#959495')
            cy.get(disabledCheckboxSelector)
                .cssBefore('box-shadow')
                .should('eq', 'rgb(149, 148, 149) 16px 16px 0px 0px inset')
            
        })
    })

    describe('Sizes', () => {
        it('Should render an input with "tiny" size', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    size={CheckboxSizes.Tiny}
                />
            )
    
            cy.get(checkboxSelector)
                .should('have.css', 'width', '18px')
                .and('have.css', 'height', '18px')

            cy.get(checkboxSelector)
                .cssBefore('width')
                .should('eq', '10px')
            cy.get(checkboxSelector)
                .cssBefore('height')
                .should('eq', '10px')
        })

        it('Should render an input with "small" size', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    size={CheckboxSizes.Small}
                />
            )
    
            cy.get(checkboxSelector)
                .should('have.css', 'width', '20px')
                .and('have.css', 'height', '20px')

            cy.get(checkboxSelector)
                .cssBefore('width')
                .should('eq', '12px')
            cy.get(checkboxSelector)
                .cssBefore('height')
                .should('eq', '12px')
        })

        it('Should render an input with "normal" size', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    size={CheckboxSizes.Normal}
                />
            )
    
            cy.get(checkboxSelector)
                .should('have.css', 'width', '22px')
                .and('have.css', 'height', '22px')

            cy.get(checkboxSelector)
                .cssBefore('width')
                .should('eq', '14px')
            cy.get(checkboxSelector)
                .cssBefore('height')
                .should('eq', '14px')
        })

        it('Should render an input with "big" size', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    size={CheckboxSizes.Big}
                />
            )
    
            cy.get(checkboxSelector)
                .should('have.css', 'width', '24px')
                .and('have.css', 'height', '24px')

            cy.get(checkboxSelector)
                .cssBefore('width')
                .should('eq', '16px')
            cy.get(checkboxSelector)
                .cssBefore('height')
                .should('eq', '16px')
        })

        it('Should render an input with "huge" size', () => {
            cy.mount(
                <Checkbox
                    data-cy={'checkbox'}
                    size={CheckboxSizes.Huge}
                />
            )
    
            cy.get(checkboxSelector)
                .should('have.css', 'width', '26px')
                .and('have.css', 'height', '26px')

            cy.get(checkboxSelector)
                .cssBefore('width')
                .should('eq', '18px')
            cy.get(checkboxSelector)
                .cssBefore('height')
                .should('eq', '18px')
        })
    })
})