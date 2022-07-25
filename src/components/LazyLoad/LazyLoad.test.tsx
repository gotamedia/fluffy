import LazyLoad from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<LazyLoad />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(
                <LazyLoad>
                    {'Test'}
                </LazyLoad>
            )
        )
    })
})
