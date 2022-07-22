import Paper from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Paper />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Paper />)
        )
    })
})
