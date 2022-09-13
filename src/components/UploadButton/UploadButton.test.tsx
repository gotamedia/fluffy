
import { render } from '@testing-library/react'

import WithThemeProvider from '@internal/hocs/WithThemeProvider'

import UploadButton from './index'

describe('<UploadButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<UploadButton />)
        )
    })
})
