import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Textarea from './index'

describe('<Textarea />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Textarea />)
        )
    })
})
