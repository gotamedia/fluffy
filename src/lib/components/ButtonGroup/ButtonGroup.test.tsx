import Button from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Button />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Button />)
        )
    })
})
