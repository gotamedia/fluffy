import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Maps from './index'

describe('<Map />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Maps.Map />)
        )
    })
})
