
import { render } from '@testing-library/react'

import WithThemeProvider from '../../internal/hocs/WithThemeProvider'

import Alert from './index'

describe('<Alert />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Alert />)
        )
    })
})
