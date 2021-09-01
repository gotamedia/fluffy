import PinInput from './PinInput'
import { render } from '@testing-library/react'

describe('<PinInput />', () => {
    it('should not crash', () => {
        render(<PinInput />)
    })
})