import Input from './Input'
import { render } from '@testing-library/react'

describe('<Input />', () => {
    it('should not crash', () => {
        render(<Input label="username" value="test" onChange={jest.fn()} />)
    })
})