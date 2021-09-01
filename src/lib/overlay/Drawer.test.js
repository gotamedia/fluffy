import Drawer from './Drawer'
import { render } from '@testing-library/react'

describe('<Drawer />', () => {
    it('should not crash', () => {
        render(<Drawer />)
    })
})