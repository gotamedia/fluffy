import Author from './Author'
import { render } from '@testing-library/react'

describe('<Author />', () => {
    it('should not crash', () => {
        render(<Author />)
    })
})