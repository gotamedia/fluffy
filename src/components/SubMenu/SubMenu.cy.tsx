import SubMenu from './index'

describe('SubMenu', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <SubMenu text={''}>
                    {null}
                </SubMenu>
            )
        })
    })
})