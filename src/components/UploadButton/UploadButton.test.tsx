import React from 'react'
import { render } from '@testing-library/react'

import WithThemeProvider from '../../utils/tests/WithThemeProvider'

import UploadButton from './index'

describe('<UploadButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<UploadButton />)
        )
    })
})
