import Text from './Text'
import { render } from '@testing-library/react'

describe('<Text />', () => {
    it('renders without crashing', () => {
        render(<Text />)
    })
})