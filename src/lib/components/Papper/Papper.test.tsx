import Papper from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Papper />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Papper />)
        )
    })
})
