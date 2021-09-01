import Input from './Input'
import { render } from '@testing-library/react'

describe('<Input />', () => {
    it('renders without crashing', () => {
        render(<Input label="username" value="test" onChange={jest.fn()} />)
    })
})