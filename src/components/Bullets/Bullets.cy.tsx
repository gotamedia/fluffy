

import { SliderDirections } from '../Slider'
import Bullets from './index'

const bulletSelector = '[data-cy=bullet]'


describe('Bullet', () => {
    describe('Functionality', () => {
        it('Should not crash horizontal', () => {
            cy.mount(
                <Bullets data-cy={'bullet'} index={0} count={5} activeIndex={0} direction={SliderDirections.Horizontal}/>
            )
        })
    
        it('Should not crash vertical', () => {
            cy.mount(
                <Bullets data-cy={'bullet'} index={0} count={5} activeIndex={0} direction={SliderDirections.Horizontal}/>
            )
    
        })
    
        it('Should call onClick callback', () => {
            const onClickSpy = cy.spy().as('onClickSpy')
    
            cy.mount(
                <Bullets data-cy={'bullet'} onBulletClick={onClickSpy} index={0} count={5} activeIndex={0} direction={SliderDirections.Horizontal}/>

            )
    
            cy.get(bulletSelector).click()
            cy.get('@onClickSpy').should('have.been.called')
        })
    
        it('Should NOT call onClick callback while disabled', () => {
            const onClickSpy = cy.spy().as('onClickSpy')
    
            cy.mount(
                <Bullets data-cy={'bullet'} onBulletClick={onClickSpy} disabled={true} index={0} count={5} activeIndex={0} direction={SliderDirections.Horizontal}/>

            )
    
            cy.get(bulletSelector).click({force: true})
            cy.get('@onClickSpy').should('not.have.been.called')
        })
    })
})