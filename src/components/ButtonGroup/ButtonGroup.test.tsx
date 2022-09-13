
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Button from './index'

describe('<Button />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Button />)
        )
    })
})
