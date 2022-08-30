import TagsInput from './index'

describe('TagsInput', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <TagsInput tags={[]}/>
            )
        })
    })
})