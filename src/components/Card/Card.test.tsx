import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Card from './index'

describe('<Card />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Card />)
        )
    })
})
