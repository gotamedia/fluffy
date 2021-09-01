import Switch from './Switch'
import { render } from '@testing-library/react'

describe('<Switch />', () => {
    it('renders without crashing', () => {
        render(<Switch />)
    })
})