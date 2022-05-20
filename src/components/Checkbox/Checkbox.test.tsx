import Checkbox from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Checkbox />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Checkbox />)
        )
    })
})
