import { Menu } from './Menu'
import { render } from '@testing-library/react'

describe('<Menu />', () => {
    it('should not crash', () => {
        render(<Menu />)
    })
})