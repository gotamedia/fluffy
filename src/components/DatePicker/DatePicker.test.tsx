import DatePicker from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<DatePicker />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<DatePicker />)
        )
    })
})
