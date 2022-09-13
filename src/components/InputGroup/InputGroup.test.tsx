
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import InputGroup from './index'

describe('<InputGroup />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<InputGroup />)
        )
    })
})
