import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Checkbox from './index'

describe('<Checkbox />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Checkbox />)
        )
    })
})
