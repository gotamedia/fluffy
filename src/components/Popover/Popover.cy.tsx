import Popover from './index'

describe('Popover', () => {
    describe('Functionality', () => {
        it('Should not crash', () => {
            cy.mount(
                <Popover
                    show={true}
                    anchorProps={{}}
                >
                    {null}
                </Popover>
            )
        })
    })
})