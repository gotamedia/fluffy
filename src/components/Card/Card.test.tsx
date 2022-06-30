import Card from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Card />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Card />)
        )
    })
})
