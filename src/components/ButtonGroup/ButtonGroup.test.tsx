import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Button from './index'

describe('<Button />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Button />)
        )
    })
})
