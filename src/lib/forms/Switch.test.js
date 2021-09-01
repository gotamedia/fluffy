import Switch from './Switch'
import { render } from '@testing-library/react'

describe('<Switch />', () => {
    it('should not crash', () => {
        render(<Switch />)
    })
})