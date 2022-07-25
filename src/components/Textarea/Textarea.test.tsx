import Textarea from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Textarea />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Textarea />)
        )
    })
})