
import { render } from '@testing-library/react'

import {
    setupIntersectionMocking,
    resetIntersectionMocking,
} from 'react-intersection-observer/test-utils'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import LazyLoad from './index'

describe('<LazyLoad />', () => {
    beforeEach(() => {
        setupIntersectionMocking(jest.fn)
    })
    
    afterEach(() => {
        resetIntersectionMocking()
    })
    
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
