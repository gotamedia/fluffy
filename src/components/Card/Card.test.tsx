
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Card from './index'

describe('<Card />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Card />)
        )
    })
})
