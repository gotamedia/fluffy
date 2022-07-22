import Pagination from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<Pagination />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<Pagination />)
        )
    })
})
