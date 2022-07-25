import Image from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Image />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Image />)
        )
    })
})
