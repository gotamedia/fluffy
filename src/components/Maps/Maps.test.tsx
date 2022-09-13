
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Maps from './index'

describe('<Map />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Maps.Map />)
        )
    })
})
