
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import SwitchButton from './index'

describe('<SwitchButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<SwitchButton />)
        )
    })
})
