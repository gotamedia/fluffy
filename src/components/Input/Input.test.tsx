import Input from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Input />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Input />)
        )
    })
})
