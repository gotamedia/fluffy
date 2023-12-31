import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import TimePicker from './index'

describe('<TimePicker />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <TimePicker
                    selected={new Date()}
                    onChange={jest.fn}
                />
            )
        )
    })
})
