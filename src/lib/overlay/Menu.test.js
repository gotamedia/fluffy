import { Menu } from './Menu'
import { render } from '@testing-library/react'

describe('<Menu />', () => {
    it('renders without crashing', () => {
        render(<Menu />)
    })
})