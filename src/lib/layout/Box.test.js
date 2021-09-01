import Box from './Box'
import { render } from '@testing-library/react'

describe('<Box />', () => {
    it('should not crash', () => {
        render(<Box />)
    })
})