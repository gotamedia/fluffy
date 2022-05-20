import UploadButton from './index'
import { render } from '@testing-library/react'

import WithThemeProvider from '@utils/tests/WithThemeProvider'

describe('<UploadButton />', () => {
    it('should not crash', () => {
        render(
            WithThemeProvider(<UploadButton />)
        )
    })
})
