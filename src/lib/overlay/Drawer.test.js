import Drawer from './Drawer'
import { render } from '@testing-library/react'

describe('<Drawer />', () => {
    it('renders without crashing', () => {
        render(<Drawer />)
    })
})