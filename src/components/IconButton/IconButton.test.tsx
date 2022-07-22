import IconButton from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<IconButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<IconButton />)
        )
    })
})
