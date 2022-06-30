import Portal from './index'
import { render } from '@testing-library/react'

describe('<Portal />', () => {
    it('should not crash', () => {
        render(
            <Portal>
                {'Henllo!'}
            </Portal>
        )
    })
})
