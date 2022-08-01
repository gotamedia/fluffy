import { tint } from 'polished'

import { theme } from '../../utils/theme'

import Radio, { RadioSizes } from './index'

const radioSelector = '[data-cy=radio]'
const disabledRadioSelector = '[data-cy=disabled-radio]'

describe('Radio', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Radio />
            )
        })


        it('Should render label', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    label={'My radio label'}
                />
            )
    
            cy.contains('label').and('include.text', 'My radio label')
        })

        it('Should render checked', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    checked={true}
                />
            )
    
            cy.get(radioSelector).should('be.checked')
        })

        it('Should NOT render checked', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    checked={false}
                />
            )
    
            cy.get(radioSelector).should('not.be.checked')
        })
    
        it('Should call onChange callback', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(radioSelector).realClick()
            cy.get('@onChangeSpy').should('have.been.calledWithMatch', Object)
            cy.get(radioSelector).should('be.checked')
        })

        it('Should call onValueChange callback', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(radioSelector).realClick()
            cy.get('@onValueChangeSpy').should('have.been.calledWith', true)
            cy.get(radioSelector).should('be.checked')
        })
    
        it('Should render disabled radio', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    disabled
                />
            )
    
            cy.get(radioSelector).should('be.disabled')
        })
    
        it('Should NOT call onChange while disabled', () => {
            const onChangeSpy = cy.spy().as('onChangeSpy')
    
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    disabled
                    onChange={onChangeSpy}
                />
            )
    
            cy.get(radioSelector).realClick()    
            cy.get('@onChangeSpy').should('not.have.been.called')
            cy.get(radioSelector).should('not.be.checked')
        })

        it('Should NOT call onValueChange while disabled', () => {
            const onValueChangeSpy = cy.spy().as('onValueChangeSpy')
    
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    disabled
                    onValueChange={onValueChangeSpy}
                />
            )
    
            cy.get(radioSelector).realClick()    
            cy.get('@onValueChangeSpy').should('not.have.been.called')
            cy.get(radioSelector).should('not.be.checked')
        })
    })

    describe('Variants', () => {
        it('Should render valid radio style', () => {
            cy.mount(
                <>
                    <Radio
                        data-cy={'disabled-radio'}
                        disabled
                    />
                    <Radio data-cy={'radio'} />
                </>
            )
            
            // idle
            cy.get(radioSelector)
                .should('have.css', 'box-shadow', 'rgb(0, 92, 169) 0px 0px 0px 2px inset')

            // hover
            cy.get(radioSelector).realHover()
            cy.get(radioSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.90, theme.colors.brand))

            // active
            cy.get(radioSelector).realMouseDown()
            cy.get(radioSelector)
                .should('have.css', 'background-color')
                .and('be.colored', tint(0.82, theme.colors.brand))

            // foucs
            cy.get(radioSelector).realMouseUp()
            cy.get(radioSelector)
                .should('have.css', 'box-shadow', 'rgb(0, 92, 169) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 0px 2px, rgb(46, 42, 37) 0px 0px 0px 4px')

            // disabled
            cy.get(disabledRadioSelector).should('have.css', 'box-shadow', 'rgb(149, 148, 149) 0px 0px 0px 2px inset')
            cy.get(disabledRadioSelector)
                .should('have.css', 'color')
                .and('be.colored', '#959495')
            cy.get(disabledRadioSelector)
                .cssBefore('background-color')
                .should('be.colored', '#959495')
            
        })
    })

    describe('Sizes', () => {
        it('Should render a radio with "tiny" size', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    size={RadioSizes.Tiny}
                />
            )
    
            cy.get(radioSelector)
                .should('have.css', 'width', '18px')
                .and('have.css', 'height', '18px')

            cy.get(radioSelector).click()
            cy.get(radioSelector)
                .cssBefore('width')
                .should('eq', '8px')
            cy.get(radioSelector)
                .cssBefore('height')
                .should('eq', '8px')
            cy.get(radioSelector)
                .cssBefore('margin')
                .should('eq', '5px')
        })

        it('Should render a radio with "small" size', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    size={RadioSizes.Small}
                />
            )
    
            cy.get(radioSelector)
                .should('have.css', 'width', '20px')
                .and('have.css', 'height', '20px')

            cy.get(radioSelector).click()
            cy.get(radioSelector)
                .cssBefore('width')
                .should('eq', '10px')
            cy.get(radioSelector)
                .cssBefore('height')
                .should('eq', '10px')
            cy.get(radioSelector)
                .cssBefore('margin')
                .should('eq', '5px')
        })

        it('Should render a radio with "normal" size', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    size={RadioSizes.Normal}
                />
            )
    
            cy.get(radioSelector)
                .should('have.css', 'width', '22px')
                .and('have.css', 'height', '22px')

            cy.get(radioSelector).click()
            cy.get(radioSelector)
                .cssBefore('width')
                .should('eq', '12px')
            cy.get(radioSelector)
                .cssBefore('height')
                .should('eq', '12px')
            cy.get(radioSelector)
                .cssBefore('margin')
                .should('eq', '5px')
        })

        it('Should render a radio with "big" size', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    size={RadioSizes.Big}
                />
            )
    
            cy.get(radioSelector)
                .should('have.css', 'width', '24px')
                .and('have.css', 'height', '24px')

            cy.get(radioSelector).click()
            cy.get(radioSelector)
                .cssBefore('width')
                .should('eq', '14px')
            cy.get(radioSelector)
                .cssBefore('height')
                .should('eq', '14px')
            cy.get(radioSelector)
                .cssBefore('margin')
                .should('eq', '5px')
        })

        it('Should render a radio with "huge" size', () => {
            cy.mount(
                <Radio
                    data-cy={'radio'}
                    size={RadioSizes.Huge}
                />
            )
    
            cy.get(radioSelector)
                .should('have.css', 'width', '26px')
                .and('have.css', 'height', '26px')

            cy.get(radioSelector).click()
            cy.get(radioSelector)
                .cssBefore('width')
                .should('eq', '14px')
            cy.get(radioSelector)
                .cssBefore('height')
                .should('eq', '14px')
            cy.get(radioSelector)
                .cssBefore('margin')
                .should('eq', '6px')
        })
    })
})