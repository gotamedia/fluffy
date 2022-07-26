import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Paper from './index'

describe('<Paper />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Paper />)
        )
    })
})
