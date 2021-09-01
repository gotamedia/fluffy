import Center from './Center'
import { render } from '@testing-library/react'

describe('<Center />', () => {
    it('should not crash', () => {
        render(<Center />)
    })
})