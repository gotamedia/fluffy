
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Paper from './index'

describe('<Paper />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Paper />)
        )
    })
})
