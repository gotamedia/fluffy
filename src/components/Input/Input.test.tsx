import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import Input from './index'

describe('<Input />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Input />)
        )
    })
})
