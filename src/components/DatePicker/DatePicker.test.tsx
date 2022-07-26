import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import DatePicker from './index'

describe('<DatePicker />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <DatePicker
                    selected={new Date()}
                    onChange={jest.fn}
                />
            )
        )
    })
})
