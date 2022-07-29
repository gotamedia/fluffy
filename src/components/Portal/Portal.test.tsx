import React from 'react'
import { render } from '@testing-library/react'

import Portal from './index'

describe('<Portal />', () => {
    it('should not crash', () => {
        render(
            <Portal>
                {'Henllo!'}
            </Portal>
        )
    })
})
