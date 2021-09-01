import Select, { Option } from './Select'
import { render } from '@testing-library/react'

describe('<Select />', () => {
    it('renders without crashing', () => {
        render(<Select />)
    })
})

describe('<Option />', () => {
    it('renders without crashing', () => {
        render(<Option />)
    })
})