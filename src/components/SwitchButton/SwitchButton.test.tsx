import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import SwitchButton from './index'

describe('<SwitchButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<SwitchButton />)
        )
    })
})
