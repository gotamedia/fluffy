import InputGroup from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<InputGroup />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<InputGroup />)
        )
    })
})
