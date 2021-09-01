import PinInput from './PinInput'
import { render } from '@testing-library/react'

describe('<PinInput />', () => {
    it('renders without crashing', () => {
        render(<PinInput />)
    })
})