import Heading from './Heading'
import { render } from '@testing-library/react'

describe('<Heading />', () => {
    it('renders without crashing', () => {
        render(<Heading />)
    })
})