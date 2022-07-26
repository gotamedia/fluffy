import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import InputGroup from './index'

describe('<InputGroup />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<InputGroup />)
        )
    })
})
