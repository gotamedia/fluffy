import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Radio from './index'

describe('<Radio />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Radio />)
        )
    })
})
