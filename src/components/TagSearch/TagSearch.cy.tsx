import TagSearch from './index'

describe('TagSearch', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <TagSearch tags={[]}/>
            )
        })
    })
})