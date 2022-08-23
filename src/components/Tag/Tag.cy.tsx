import Tag from './index'

describe('Tag', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Tag label={'Article'}/>
            )
        })
    })
})