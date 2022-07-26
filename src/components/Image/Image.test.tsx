import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Image from './index'

describe('<Image />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Image />)
        )
    })
})
