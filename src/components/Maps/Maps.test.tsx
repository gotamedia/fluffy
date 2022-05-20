import Maps from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Map />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Maps.Map />)
        )
    })
})
