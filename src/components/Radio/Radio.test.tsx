import Radio from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Radio />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Radio />)
        )
    })
})
