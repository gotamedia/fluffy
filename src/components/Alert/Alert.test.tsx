import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Alert from './index'

describe('<Alert />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Alert />)
        )
    })
})
