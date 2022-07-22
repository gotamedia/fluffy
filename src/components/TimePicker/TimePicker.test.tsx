import TimePicker from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<TimePicker />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<TimePicker />)
        )
    })
})
