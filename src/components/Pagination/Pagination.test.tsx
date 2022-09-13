
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import Pagination from './index'

describe('<Pagination />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <Pagination
                    activePage={1}
                    visiblePages={10}
                    totalPages={100}
                    onChange={jest.fn}
                />
            )
        )
    })
})
