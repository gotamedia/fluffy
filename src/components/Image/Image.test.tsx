
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Image from './index'

describe('<Image />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Image />)
        )
    })
})
